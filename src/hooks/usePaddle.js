import { useUserStore } from "@/store/store";
import { useEffect, useState, useCallback } from "react";

export const usePaddle = () => {
  const [isPaddleReady, setIsPaddleReady] = useState(false);
  const [error, setError] = useState(null);

  const setPaymentData = useUserStore((state) => state.setPaymentData);

  const initPaddle = useCallback(() => {
    if (!window.Paddle) {
      setError("Paddle.js not loaded");
      return;
    }

    try {
      window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({
        token: "test_f5c8efdb7d866cadcb0addf090b",
        checkout: {
          settings: {
            locale: "en",
          },
        },
        eventCallback: (data) => {
          setPaymentData(data);
        },
      });

      setIsPaddleReady(true);
      setError(null);
    } catch (err) {
      console.error("Paddle init error:", err);
      setError("Failed to initialize Paddle");
    }
  }, []);

  useEffect(() => {
    if (window.Paddle) {
      initPaddle();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = initPaddle;
    script.onerror = () => setError("Failed to load Paddle.js");
    document.body.appendChild(script);
  }, [initPaddle]);

  const openInlineCheckout = useCallback(
    (priceId, customerEmail) => {
      if (!window.Paddle || !isPaddleReady) return;

      window.Paddle.Checkout.open({
        method: "inline",
        frameTarget: "#paddle-inline-container",
        frameStyle: "width:100%; min-height:600px;",
        items: [{ priceId }],
        ...(customerEmail && { customer: { email: customerEmail } }),
      });
    },
    [isPaddleReady],
  );

  return {
    isPaddleReady,
    error,
    openInlineCheckout,
  };
};
