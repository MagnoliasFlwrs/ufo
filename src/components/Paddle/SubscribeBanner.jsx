import { useRef, useState, useEffect } from "react";
import { Typography, Box, Button, Divider } from "@mui/material";
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
  const checkoutContainerRef = useRef(null);

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

  const handlePlanSelect = async (plan, planTitle) => {
    setSelectedPlan(planTitle);
  };

  const handleTimerEnd = () => {
    setIsTimerActive(false);
    const defaultPlan = PLANS.find((plan) => plan.title === "1-MONTH");
    if (defaultPlan) {
      setSelectedPlan(defaultPlan.title);
      handlePlanSelect(defaultPlan, defaultPlan.title);
    }
  };

  const scrollToCheckout = () => {
    checkoutContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (PLANS.length > 0) {
      const defaultPlan = PLANS.find((plan) => plan.title === "1-MONTH");
      if (defaultPlan) {
        handlePlanSelect(defaultPlan, defaultPlan.title);
      }
    }
  }, [PLANS]);

  const currentPlan = PLANS.find((plan) => plan.title === selectedPlan) || PLANS[1];

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

      {isTimerActive && <CountdownTimer initialMinutes={0} initialSeconds={2} onTimerEnd={handleTimerEnd} />}

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
      <Box sx={{ mt: 3, p: 2, borderRadius: "8px", border: "0.4px solid #DFDFDF" }} ref={checkoutContainerRef}></Box>

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
