import { useState, useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";

export const CountdownTimer = ({ initialMinutes = 0, initialSeconds = 0, onTimerEnd }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  const mainTimerRef = useRef(null);
  const secondaryTimerRef = useRef(null);

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          return 59;
        }
        clearInterval(timer);
        if (onTimerEnd) onTimerEnd();
        return 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, onTimerEnd]);

  useEffect(() => {
    const updatePadding = () => {
      if (secondaryTimerRef.current) {
        const timerHeight = secondaryTimerRef.current.offsetHeight;
        document.body.style.paddingBottom = `${timerHeight}px`;
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => {
      document.body.style.paddingBottom = "0px";
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainTimerRef.current) return;

      const { bottom } = mainTimerRef.current.getBoundingClientRect();
      setIsHidden(bottom < 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main timer */}
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
          mt: 2,
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

      {/* Secondary timer that appears at bottom of screen */}
      <Box
        ref={secondaryTimerRef}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#50B671",
          height: "54px",
          width: "100%",
          maxWidth: "475px",
          position: "fixed",
          bottom: "0px",
          marginLeft: "-20px",
          opacity: isHidden ? 0.8 : 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: 1000,
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
