import { useState, useRef, useEffect } from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import { useUserStore } from "@/store/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { UfoLogo } from "./UfoLogo";

export const EmailInput = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const inputRef = useRef(null);

  const updateUserData = useUserStore((state) => state.updateUserData);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleNext = () => {
    const trimmedEmail = email.trim();
    updateUserData("email", trimmedEmail);
    onNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
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
          gap: "8px",
          backgroundColor: "#249A50",
          padding: "12px 16px",
          marginBottom: "24px",
          marginLeft: "-20px",
          marginRight: "-20px",
          width: "calc(100% + 40px)",
        }}>
        <CheckCircleIcon sx={{ color: "#FFFFFF", fontSize: "30px" }} />
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
            placeholder='Enter your email'
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
        disabled={!email.trim()}>
        See my plan
      </Button>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "24px" }}>
        <Typography variant='body1' align='left' color='text.secondary' sx={{ fontWeight: 450, fontSize: "18px" }}>
          By submitting your email address, you may also receive email offers from Simple about our services. You may
          unsubscribe at any time.
        </Typography>

        <Typography variant='body1' align='left' color='text.secondary' sx={{ fontWeight: 450, fontSize: "18px" }}>
          Your use of Simple is bound by the{" "}
          <Link href='#' underline='always' color='inherit'>
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href='#' underline='always' color='inherit'>
            Privacy Policy
          </Link>
          .
        </Typography>
      </div>
    </div>
  );
};
