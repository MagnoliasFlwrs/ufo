import { useRef, useState, useEffect } from "react";
import { Typography, Box, Button, Divider } from "@mui/material";
import { usePaddle } from "@/hooks/usePaddle";
import { usePaddleProducts } from "@/hooks/usePaddleProducts";
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

export const SubscribeBanner = () => {
  const { openInlineCheckout, error } = usePaddle();
  const { products: PLANS, loading: productsLoading, error: productsError } = usePaddleProducts();
  const [selectedPlan, setSelectedPlan] = useState("1-MONTH");
  const [isPaddleInitialized, setIsPaddleInitialized] = useState(false);
  const checkoutContainerRef = useRef(null);

  // Initialize checkout on mount with delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (PLANS.length > 0) {
        const defaultPlan = PLANS.find((plan) => plan.title === "1-MONTH");
        if (defaultPlan) {
          openInlineCheckout(defaultPlan.id);
          setIsPaddleInitialized(true);
        }
      }
    }, 1000); // 1 second delay to ensure Paddle is loaded

    return () => clearTimeout(timer);
  }, [PLANS, openInlineCheckout]);

  const calculateEndDate = (period) => {
    const now = new Date();
    switch (period) {
      case "1-WEEK":
        now.setDate(now.getDate() + 7);
        break;
      case "1-MONTH":
        now.setMonth(now.getMonth() + 1);
        break;
      case "3-MONTH":
        now.setMonth(now.getMonth() + 3);
        break;
      default:
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

  const handlePlanSelect = (priceId, planTitle) => {
    setSelectedPlan(planTitle);
    openInlineCheckout(priceId);
  };

  const scrollToCheckout = () => {
    checkoutContainerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (error || productsError) {
    return (
      <Box textAlign='center' color='error.main' py={2}>
        <Typography>{error || productsError}</Typography>
      </Box>
    );
  }

  if (productsLoading) {
    return (
      <Box textAlign='center' py={4}>
        <Typography>Loading subscription plans...</Typography>
      </Box>
    );
  }

  const currentPlan = PLANS.find((plan) => plan.title === selectedPlan) || PLANS[1];

  return (
    <Box>
      <UfoLogo />
      <Schedule />

      <Typography
        variant='h5'
        align='center'
        gutterBottom
        sx={{ color: "primary.main", fontSize: "28px", fontWeight: 700, p: 3 }}>
        Grab your Personal Plan before it&apos;s gone!
      </Typography>

      <CountdownTimer initialMinutes={10} initialSeconds={0} />

      <Box display='flex' flexDirection='column' gap={2} mt={4}>
        {PLANS.map((plan) => (
          <SubscriptionPlanCard
            key={plan.id}
            title={plan.title}
            originalPrice={plan.originalPrice}
            discountedPrice={plan.discountedPrice}
            pricePerDay={plan.pricePerDay}
            isSelected={plan.title === selectedPlan}
            onClick={() => handlePlanSelect(plan.id, plan.title)}
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
        introPrice={currentPlan.discountedPrice}
        originalPrice={currentPlan.originalPrice}
        endDate={calculateEndDate(currentPlan.title)}
        introPeriod={currentPlan.introPeriod}
      />

      <Typography
        variant='h5'
        align='left'
        gutterBottom
        sx={{ color: "primary.main", fontSize: "26px", fontWeight: 700, mt: 4 }}>
        Payment method
      </Typography>

      <Divider sx={{ borderWidth: "1px", borderColor: "#241063", width: "100%", mx: "auto", opacity: "0.6" }} />

      <Typography align='left' sx={{ color: "primary.main", fontWeight: 450, fontSize: "16px", mt: 2 }}>
        UFO will use your payment details for seamless future payments.
      </Typography>

      <Box
        className='checkout-container'
        sx={{ mt: 3, p: 2, backgroundColor: "#F5F5F5", borderRadius: "8px", border: "0.4px solid #DFDFDF" }}
        ref={checkoutContainerRef}>
        {!isPaddleInitialized && <Typography color='text.secondary'>Loading payment options...</Typography>}
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
