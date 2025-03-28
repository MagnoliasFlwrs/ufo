import { useEffect, useState } from "react";

export const usePaddle = () => {
  const [isPaddleReady, setIsPaddleReady] = useState(false);

  useEffect(() => {
    const initPaddle = () => {
      window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({
        token: "test_f5c8efdb7d866cadcb0addf090b",
      });
      setIsPaddleReady(true);

      console.log("Paddle инициализирован");
    };

    if (window.Paddle) {
      initPaddle();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
      script.onload = initPaddle;
      script.onerror = () => console.error("Ошибка загрузки Paddle.js");
      document.body.appendChild(script);
    }
  }, []);

  const openCheckout = (priceId) => {
    if (!isPaddleReady || !window.Paddle) {
      console.error("Paddle не инициализирован");
      return;
    }

    window.Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
    });
  };

  return { openCheckout, isPaddleReady };
};
