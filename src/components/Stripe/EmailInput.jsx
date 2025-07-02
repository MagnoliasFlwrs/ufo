import { useState, useRef, useEffect } from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useFirestoreDataStore, useUserStore } from "@/store/store";
import { UfoLogo } from "./UfoLogo";

export const EmailInput = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const createUser = useFirestoreDataStore((state) => state.createUser);
  const sendSignInEmail = useFirestoreDataStore((state) => state.sendSignInEmail);

  const age = useUserStore((state) => state.age);
  const gender = useUserStore((state) => state.gender);
  const height = useUserStore((state) => state.height);
  const weight = useUserStore((state) => state.weight);
  const wishlist = useUserStore((state) => state.wishlist);
  const listOfIntentions = useUserStore((state) => state.listOfIntentions);
  const inspiringEvents = useUserStore((state) => state.inspiringEvents);
  const fastFoodTime = useUserStore((state) => state.fastFoodTime);
  const nonHungerTriggers = useUserStore((state) => state.nonHungerTriggers);
  const weightLossSuccess = useUserStore((state) => state.weightLossSuccess);
  const mealPreference = useUserStore((state) => state.mealPreference);
  const startDay = useUserStore((state) => state.startDay);
  const healthConditions = useUserStore((state) => state.healthConditions);
  const updateUserData = useUserStore((state) => state.updateUserData);

  useEffect(() => {
    inputRef.current?.focus();

    const savedEmail = localStorage.getItem("email");

    if (savedEmail) {
      // setEmail(savedEmail);
      updateUserData("email", savedEmail);
    }
  }, []);

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
    return newPassword;
  };
  useEffect(() => {
    generatePassword();
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    setIsValidEmail(validateEmail(email.trim()));
  }, [email]);

  const handleNext = async () => {
    if (!isValidEmail) return;

    setIsLoading(true);

    const trimmedEmail = email.trim();
    updateUserData("email", trimmedEmail);
    localStorage.setItem("email", trimmedEmail);

    const onboardingData = {
      userAge: age,
      userHeight: height,
      userInitWeight: weight,
      userInspEvents: inspiringEvents,
      userIntentions: listOfIntentions,
      userSex: gender,
      userWeightLoss: weightLossSuccess,
      userFastFood: fastFoodTime,
      userGoals: wishlist,
      userEats: nonHungerTriggers,
      userConditions: healthConditions,
    };
    console.log(trimmedEmail, password, onboardingData);
    if (trimmedEmail && password) {
      try {
        await createUser({
          email: trimmedEmail,
          password: password,
          mealPreference: mealPreference,
          startDay: startDay,
          onboardingData: onboardingData,
        });

        await sendSignInEmail(trimmedEmail);
        onNext();
      } catch (error) {
        console.error("Ошибка в процессе регистрации:", error);
        onNext();
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isValidEmail) {
      handleNext();
    }
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <UfoLogo />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "#50B671",
          padding: "8px 16px",
          marginBottom: "24px",
          marginLeft: "-20px",
          marginRight: "-20px",
          width: "calc(100% + 40px)",
        }}>
        <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='1' y='1' width='28' height='28' rx='14' fill='#50B671' />
          <rect x='1' y='1' width='28' height='28' rx='14' stroke='white' strokeWidth='2' />
          <path
            d='M13.364 19.193L22.556 10L23.971 11.414L13.364 22.021L7 15.657L8.414 14.243L13.364 19.193Z'
            fill='#F5F5F5'
          />
        </svg>

        <Typography variant='body1' sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "18px" }}>
          Your personalised plan is ready
        </Typography>
      </Box>

      <div>
        <Typography variant='h5' align='left' gutterBottom sx={{ color: "primary.main", fontWeight: 500 }}>
          Enter your email to get your personal weight loss plan
        </Typography>
      </div>

      <div className='email-input'>
        <div className='input-wrapper'>
          <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputRef}
          />
        </div>
      </div>

      <Button
        variant='contained'
        fullWidth
        onClick={handleNext}
        className='email-button'
        sx={{
          mt: 3,
          backgroundColor: "#FF5C1D",
          "&:hover": {
            backgroundColor: "#FF4500",
          },
          "&:disabled": {
            backgroundColor: "#FF8D63",
            color: "white",
          },
        }}
        disabled={!isValidEmail || isLoading}>
        {isLoading ? <CircularProgress size={20} sx={{ color: "white" }} /> : "See my plan"}
      </Button>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "24px" }}>
        <Typography
          variant='body1'
          align='left'
          color='#999999'
          sx={{ fontWeight: 450, fontSize: "18px", lineHeight: 1.2 }}>
          By submitting your email address, you may also receive email offers from Simple about our services. You may
          unsubscribe at any time.
        </Typography>

        <Typography
          variant='body1'
          align='left'
          color='#999999'
          sx={{ fontWeight: 450, fontSize: "18px", lineHeight: 1.2 }}>
          Your use of Simple is bound by the{" "}
          <Link href='/terms-of-use' underline='always' color='inherit'>
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href='/privacy-policy' underline='always' color='inherit'>
            Privacy Policy
          </Link>
          .
        </Typography>
      </div>
    </div>
  );
};
