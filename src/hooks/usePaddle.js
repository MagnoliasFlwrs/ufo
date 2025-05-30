import { useUserStore } from "@/store/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PADDLE_SCRIPT_URL = "https://cdn.paddle.com/paddle/v2/paddle.js";
const FRAME_STYLE = "width:100%; min-width:312px; background-color:transparent; border:none;";
const DEFAULT_LOCATION = { countryCode: "US", postalCode: "00000" };

export const usePaddle = () => {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(DEFAULT_LOCATION);

  const storeEmail = useUserStore((state) => state.email);
  const setPaymentData = useUserStore((state) => state.setPaymentData);
  const navigate = useNavigate();

  const [email, setEmail] = useState(null); // итоговый email для Paddle

  useEffect(() => {
    const initEmail = () => {
      if (storeEmail) {
        setEmail(storeEmail);
      } else {
        const localEmail = localStorage.getItem("email");
        if (localEmail) {
          setEmail(localEmail);
        } else {
          navigate("/");
        }
      }
    };

    initEmail();
    loadLocation();
    loadPaddleScript();
  }, []);

  const loadLocation = async () => {
    const cached = localStorage.getItem("user_location");
    if (cached) {
      setLocation(JSON.parse(cached));
      return;
    }

    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const userLocation = {
        countryCode: data.country || "US",
        postalCode: data.postal || "00000",
      };
      setLocation(userLocation);
      localStorage.setItem("user_location", JSON.stringify(userLocation));
    } catch (err) {
      console.error("Failed to fetch user location:", err);
      setLocation(DEFAULT_LOCATION);
    }
  };

  const loadPaddleScript = () => {
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
  };

  const initializePaddle = () => {
    try {
      const paddleToken = import.meta.env.VITE_PADDLE_TOKEN;

      if (!paddleToken) {
        throw new Error("Paddle token is missing in environment variables");
      }

      // const isProduction = import.meta.env.MODE === "production";
      // window.Paddle.Environment.set(isProduction ? "production" : "sandbox");

      window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({
        token: paddleToken,
        checkout: {
          settings: {
            locale: "en",
            displayMode: "inline",
            frameTarget: "checkout-container",
            frameInitialHeight: "750",
            frameStyle: FRAME_STYLE,
          },
        },
        eventCallback: (data) => {
          if (data?.name === "checkout.customer.created") {
            setPaymentData(data);
          }
        },
      });
      setError(null);
    } catch (err) {
      console.error("Paddle init error:", err);
      setError("Failed to initialize Paddle: " + err.message);
    }
  };

  const openInlineCheckout = (priceId) => {
    if (!window.Paddle || !email) return;

    window.Paddle.Checkout.open({
      method: "inline",
      items: [{ priceId }],
      customer: {
        email,
        address: {
          countryCode: location.countryCode,
          postalCode: location.postalCode,
        },
      },
    });
  };

  return { error, openInlineCheckout };
};
