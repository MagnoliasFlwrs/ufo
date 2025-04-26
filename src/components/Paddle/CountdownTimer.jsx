import { useState, useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";

export const CountdownTimer = ({ initialMinutes = 0, initialSeconds = 0 }) => {
  // State for tracking minutes and seconds countdown
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  // Reference to the main timer element
  const mainTimerRef = useRef(null);

  // State to determine if the main timer has left the visible screen
  const [isHidden, setIsHidden] = useState(false);

  // Timer effect to decrement the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          return 59;
        }
        clearInterval(timer);
        return 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes]);

  // Scroll event listener to track when the main timer leaves the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!mainTimerRef.current) return;

      const { bottom } = mainTimerRef.current.getBoundingClientRect();
      setIsHidden(bottom < 0); // If out of view, reveal the second timer
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  return (
    <>
      {/* Main timer - Visible on the page normally */}
      <Box
        ref={mainTimerRef}
        sx={{
          display: "flex",
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

      {/* Secondary timer - Fixed at the bottom, only visible when the main timer is out of view */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#50B671",
          height: "54px",
          width: "100%",
          maxWidth: "475px", // Restricts width to match the container
          position: "fixed",
          bottom: "10px",
          marginLeft: "-20px",
          opacity: isHidden ? 0.8 : 0, // Gradual appearance when main timer disappears
          transition: "opacity 0.3s ease-in-out",
          zIndex: 1000, // Ensures it's above other content
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
    </>
  );
};
