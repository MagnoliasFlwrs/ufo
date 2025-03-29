import { useEffect, useState, useCallback } from "react";

export const usePaddle = () => {
  const [isPaddleReady, setIsPaddleReady] = useState(false);
  const [error, setError] = useState(null);

  const initPaddle = useCallback(() => {
    try {
      if (!window.Paddle) {
        throw new Error("Paddle.js not loaded");
      }

      window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({
        token: "test_f5c8efdb7d866cadcb0addf090b",

        checkout: {
          settings: {
            locale: "en",
          },
        },
      });
      setIsPaddleReady(true);
      setError(null);
    } catch (err) {
      console.error("Paddle initialization failed:", err);
      setError("Failed to initialize payment system");
    }
  }, []);

  useEffect(() => {
    if (window.Paddle) {
      initPaddle();
      return;
    }

    const existingScript = document.querySelector('script[src="https://cdn.paddle.com/paddle/v2/paddle.js"]');

    if (existingScript) {
      existingScript.addEventListener("load", initPaddle);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = initPaddle;
    script.onerror = () => {
      console.error("Failed to load Paddle.js");
      setError("Failed to load payment system");
    };
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", initPaddle);
    };
  }, [initPaddle]);

  const openCheckout = useCallback(
    (priceId, customerEmail) => {
      if (!isPaddleReady || !window.Paddle) {
        console.error("Paddle is not ready");
        setError("Payment system is not ready");
        return;
      }

      try {
        window.Paddle.Checkout.open({
          items: [{ priceId, quantity: 1 }],
          ...(customerEmail && { customer: { email: customerEmail } }),
        });
      } catch (err) {
        console.error("Checkout failed:", err);
        setError("Failed to open checkout");
      }
    },
    [isPaddleReady],
  );

  return { openCheckout, isPaddleReady, error };
};
