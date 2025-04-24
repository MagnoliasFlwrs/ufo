import { useState, useRef, useEffect } from "react";
import { Button, Typography, Box, Link } from "@mui/material";
import { useUserStore } from "@/store/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "24px",
        }}>
        <Typography
          variant='h2'
          sx={{
            color: "#241063",
            fontSize: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "30px",
          }}>
          <svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'>
            <path
              d='M15.7883 3.79988C14.6818 1.72527 11.7082 1.72527 10.6018 3.79988L1.68213 20.5243C0.935873 21.9236 1.45509 23.7119 3.07719 24.2042C5.07791 24.8114 8.40362 25.5 13.195 25.5C17.9864 25.5 21.3121 24.8114 23.3129 24.2042C24.935 23.7119 25.4542 21.9236 24.7079 20.5243L15.7883 3.79988Z'
              fill='#FF5C1D'
              stroke='#FF5C1D'
            />
          </svg>
          UFO
        </Typography>
      </Box>

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
