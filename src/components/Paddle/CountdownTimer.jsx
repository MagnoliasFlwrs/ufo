import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

export const CountdownTimer = ({ initialMinutes = 0, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#50B671",
        borderRadius: "8px",
        height: "54px",
        width: "100%",
        px: 3,
      }}>
      <Typography
        variant='h6'
        align='center'
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "54px",
        }}>
        This offer ends in {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")} min
      </Typography>
    </Box>
  );
};
