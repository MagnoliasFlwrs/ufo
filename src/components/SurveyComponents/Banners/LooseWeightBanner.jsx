import React, { useEffect, useRef, useState } from "react";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { UfoLogo } from "@/components/Stripe";
import { WeightLostImage } from "../SvgImages/WeightLostImage";

export const LooseWeightBanner = ({ onClose }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && progress === 100) {
      onClose();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          return 100;
        }
        const diff = Math.floor(Math.random() * 10) + 1;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='content'>
      <Box
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          outline: "none",
        }}>
        <UfoLogo />

        <Typography
          variant='h6'
          sx={{
            color: "#241063",
            fontSize: "22px",
            fontWeight: "500",
            lineHeight: "135%",
            marginBottom: "58px",
          }}>
          Lose twice as much weight with UFO vs. trying on your own
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            marginBottom: "124px",
          }}>
          <Box
            sx={{
              width: "343px",
              height: "270px",
            }}>
            <WeightLostImage />
          </Box>

          <Typography
            variant='h6'
            sx={{
              color: "#999",
              fontSize: "14px",
              fontWeight: "450",
              lineHeight: "150%",
              marginBottom: "58px",
            }}>
            Based on a study over 12 weeks of active UFO users.
          </Typography>
        </Box>
      </Box>

      <div className='bottom-block'>
        {progress === 100 ? (
          <Button variant='contained' fullWidth onClick={onClose} className='survey-next-button'>
            Next
          </Button>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
                width: "100%",
                mb: 2,
              }}>
              <Typography
                variant='h6'
                sx={{
                  color: "#241063",
                  fontSize: "14px",
                  fontWeight: "450",
                  lineHeight: "150%",
                }}>
                Calculating weight loss pace
              </Typography>
            </Box>

            <Box sx={{ width: "100%", position: "relative" }}>
              <LinearProgress
                variant='determinate'
                value={progress}
                sx={{
                  height: "54px",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "8px",

                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#FF5C1D",
                  },
                }}
              />
              <Typography
                variant='h6'
                sx={{
                  textAlign: "center",
                  color: "#241063",
                  fontSize: "18px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}>
                {progress}%
              </Typography>
            </Box>
          </>
        )}
      </div>
    </div>
  );
};
