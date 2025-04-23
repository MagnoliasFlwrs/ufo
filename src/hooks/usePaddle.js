import { useUserStore } from "@/store/store";
import { useEffect, useState } from "react";

const PADDLE_SCRIPT_URL = "https://cdn.paddle.com/paddle/v2/paddle.js";
const FRAME_STYLE = "width:100%; min-width:312px; background-color:transparent; border:none;";

export const usePaddle = () => {
  const [error, setError] = useState(null);
  const setPaymentData = useUserStore((state) => state.setPaymentData);

  useEffect(() => {
    if (window.Paddle) {
      initializePaddle();
      return;
    }

    const script = document.createElement("script");
    script.src = PADDLE_SCRIPT_URL;
    script.async = true;

    const handleLoad = () => initializePaddle();
    const handleError = () => setError("Failed to load Paddle.js");

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
      document.body.removeChild(script);
    };
  }, []);

  const initializePaddle = () => {
    try {
      window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({
        token: "test_f5c8efdb7d866cadcb0addf090b",
        checkout: {
          settings: {
            locale: "en",
            displayMode: "inline",
            frameTarget: "checkout-container",
            frameInitialHeight: "450",
            frameStyle: FRAME_STYLE,
          },
        },
        eventCallback: setPaymentData,
      });
      setError(null);
    } catch (err) {
      console.error("Paddle init error:", err);
      setError("Failed to initialize Paddle");
    }
  };

  const openInlineCheckout = (priceId, customerEmail) => {
    if (!window.Paddle) return;

    window.Paddle.Checkout.open({
      method: "inline",
      frameTarget: "#paddle-inline-container",
      frameStyle: FRAME_STYLE,
      items: [{ priceId }],
      ...(customerEmail && { customer: { email: customerEmail } }),
    });
  };

  return { error, openInlineCheckout };
};
