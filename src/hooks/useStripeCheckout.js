import { useState } from "react";

export function useStripeCheckout({ containerId = "checkout-container", returnUrl } = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openCheckout = async (priceId, email) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, email, returnUrl }),
      });

      if (!res.ok) throw new Error("Failed to create session");

      const data = await res.json();
      const sessionId = data.sessionId;
      if (!sessionId) throw new Error("Session ID not returned");

      const container = document.getElementById(containerId);
      if (!container) throw new Error(`Container #${containerId} not found`);

      container.innerHTML = "";

      const stripeCheckout = document.createElement("stripe-checkout");
      stripeCheckout.setAttribute("session-id", sessionId);

      container.appendChild(stripeCheckout);
    } catch (err) {
      console.error(err);
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return {
    openCheckout,
    loading,
    error,
  };
}
