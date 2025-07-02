import { useRef, useState, useEffect, useCallback } from "react";
import { Typography, Box, Button, Divider } from "@mui/material";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  CountdownTimer,
  CustomerReviews,
  MoneyBack,
  ResearchNote,
  Schedule,
  SubscriptionInfo,
  SubscriptionPlanCard,
  UfoLogo,
  UserStats,
} from "./index";
import { useUserStore } from "@/store/store";

const stripePromise = loadStripe(
  "pk_test_51RZwwMP7v3zBLEUjuyCmhmxe5AVYIhOW36sCREk2LQokIY9hM2ufrB38ObWe2fzEwdHM92kO1tI1fqoQH21JhLpR00GRrasQ9w",
);

export const PLANS = [
  {
    id: "price_1RZxNRP7v3zBLEUjKvSNH67Y",
    id_sale: "price_1RZxR5P7v3zBLEUjWTr9jtJa",
    title: "1-WEEK",
    originalPrice: 9.99,
    discountedPrice: 4.99,
    introPeriod: 7,
    periodLabel: "7 days",
  },
  {
    id: "price_1RfcyxP7v3zBLEUjJMynniNV",
    id_sale: "price_1RfcyXP7v3zBLEUjxMyGcii3",
    title: "1-MONTH",
    originalPrice: 29.99,
    discountedPrice: 17.99,
    introPeriod: 30,
    periodLabel: "1 month",
  },
  {
    id: "price_1Rfd1ZP7v3zBLEUjZmPJIIwq",
    id_sale: "price_1Rfd1BP7v3zBLEUjVSJPTlwT",
    title: "3-MONTH",
    originalPrice: 59.99,
    discountedPrice: 29.99,
    introPeriod: 90,
    periodLabel: "3 months",
  },
];

export const SubscribeBanner = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [clientSecret, setClientSecret] = useState(null);
  const [stripeSessionId, setSessionId] = useState(null);
  const [checkoutReady, setCheckoutReady] = useState(false);
  const checkoutContainerRef = useRef(null);

  const fetchClientSecret = useCallback(async (priceId, mode, sessionId) => {
    const email = useUserStore.getState().email;
    try {
      setCheckoutReady(false); // ⛔️ Убираем старый checkout
      const res = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, mode, email, sessionId }),
      });

      const data = await res.json();
      setClientSecret(data.clientSecret);
      setSessionId(data.sessionId);
      console.log("✅ Получен clientSecret:", data.clientSecret);
      setCheckoutReady(true); // ✅ Показываем новый checkout
    } catch (error) {
      console.error("Error fetching clientSecret:", error);
    }
  }, []);

  const handleCheckoutComplete = async () => {
    try {
      const res = await fetch("http://localhost:4242/payment-success", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientSecret, sessionId: stripeSessionId }),
      });

      const paymentData = await res.json();
      useUserStore.getState().setPaymentData(paymentData);
      console.log("✅ Данные об оплате получены:", paymentData);
    } catch (error) {
      console.error("❌ Ошибка при получении данных:", error);
    }
  };

  const handlePlanSelect = async (plan) => {
    setSelectedPlan(plan.title);
    const priceId = isTimerActive ? plan.id_sale : plan.id;
    const mode = isTimerActive ? "payment" : "subscription";
    await fetchClientSecret(priceId, mode);
  };

  const handleTimerEnd = async () => {
    setIsTimerActive(false);

    const currentPlan = PLANS.find((plan) => plan.title === selectedPlan);

    if (currentPlan) {
      await fetchClientSecret(currentPlan.id, "subscription");
    }
  };

  const scrollToCheckout = () => {
    checkoutContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const defaultPlan = PLANS.find((plan) => plan.title === "1-MONTH");
    if (defaultPlan) {
      setSelectedPlan(defaultPlan.title);
      handlePlanSelect(defaultPlan);
    }
  }, []);

  const currentPlan = PLANS.find((plan) => plan.title === selectedPlan) || PLANS[1];

  const calculatePricePerDay = (plan) => {
    const priceToUse = isTimerActive ? plan.discountedPrice : plan.originalPrice;
    const pricePerDay = priceToUse / plan.introPeriod;
    return `${pricePerDay.toFixed(2)}`;
  };

  const calculateEndDate = (plan) => {
    const now = new Date();

    if (plan.title.includes("WEEK")) {
      now.setDate(now.getDate() + plan.introPeriod);
    } else if (plan.title.includes("MONTH")) {
      now.setMonth(now.getMonth() + plan.introPeriod / 30);
    } else {
      now.setMonth(now.getMonth() + 1);
    }

    return now.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Box>
      <UfoLogo />
      <Schedule />

      <Typography
        variant='h5'
        align='center'
        gutterBottom
        sx={{ color: "primary.main", fontSize: "28px", fontWeight: 700, p: 3, pb: 0 }}>
        Grab your Personal Plan before it&apos;s gone!
      </Typography>

      {isTimerActive && <CountdownTimer initialMinutes={10} initialSeconds={0} onTimerEnd={handleTimerEnd} />}

      <Box display='flex' flexDirection='column' gap={2} mt={4}>
        {PLANS.map((plan) => (
          <SubscriptionPlanCard
            key={plan.id}
            title={plan.title}
            originalPrice={`$${plan.originalPrice.toFixed(2)}`}
            discountedPrice={isTimerActive ? `$${plan.discountedPrice.toFixed(2)}` : null}
            pricePerDay={calculatePricePerDay(plan)}
            isSelected={plan.title === selectedPlan}
            onClick={() => handlePlanSelect(plan, plan.title)}
          />
        ))}
      </Box>

      <ResearchNote />

      <Button
        variant='contained'
        fullWidth
        className='email-button'
        onClick={scrollToCheckout}
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#FF5C1D",
          "&:hover": { backgroundColor: "#FF4500" },
          "&:disabled": { backgroundColor: "#FF8D63", color: "white" },
        }}>
        Get my plan
      </Button>

      <UserStats />
      <CustomerReviews />

      <Button
        variant='contained'
        fullWidth
        className='email-button'
        onClick={scrollToCheckout}
        sx={{
          backgroundColor: "#FF5C1D",
          "&:hover": { backgroundColor: "#FF4500" },
          "&:disabled": { backgroundColor: "#FF8D63", color: "white" },
        }}>
        Get my plan
      </Button>

      <MoneyBack />

      <SubscriptionInfo
        introPrice={isTimerActive ? currentPlan.discountedPrice : currentPlan.originalPrice}
        originalPrice={currentPlan.originalPrice}
        endDate={calculateEndDate(currentPlan)}
        introPeriod={currentPlan.periodLabel}
      />

      <Typography
        variant='h5'
        align='left'
        gutterBottom
        sx={{ color: "primary.main", fontSize: "26px", fontWeight: 700 }}>
        Payment method
      </Typography>

      <Divider sx={{ borderWidth: "1px", borderColor: "#241063", width: "100%", mx: "auto", opacity: "0.6" }} />

      <Typography align='left' sx={{ color: "primary.main", fontWeight: 450, fontSize: "16px", mt: 2 }}>
        UFO will use your payment details for seamless future payments.
      </Typography>

      {/* stripe checkout */}
      <Box
        sx={{ mt: 3, p: 1, backgroundColor: "#F5F5F5", borderRadius: "8px", border: "0.4px solid #DFDFDF" }}
        ref={checkoutContainerRef}
        id='checkout'>
        {checkoutReady && clientSecret && (
          <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
            <EmbeddedCheckout clientSecret={clientSecret} onComplete={handleCheckoutComplete} />
          </EmbeddedCheckoutProvider>
        )}
      </Box>

      <Typography align='left' sx={{ color: "primary.main", fontWeight: 450, fontSize: "16px", mt: 2 }}>
        You will need an iPhone smartphone to use UFO.
      </Typography>

      <Typography align='left' sx={{ color: "primary.main", fontWeight: 700, fontSize: "16px", mt: 2 }}>
        Secure checkout
      </Typography>
      <Typography align='left' sx={{ color: "primary.main", fontWeight: 450, fontSize: "16px", lineHeight: 1.2 }}>
        All information is encrypted and transmitted using Secure Sockets Layer protocol.
      </Typography>
    </Box>
  );
};
