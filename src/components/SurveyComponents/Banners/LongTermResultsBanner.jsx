import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { UfoLogo } from "@/components/Paddle";
import { BannerImage } from "../SvgImages/BannerImage";

export const LongTermResultsBanner = ({ onClose }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onClose();
    }
  };

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
            marginBottom: "32px",
            textAlign: "left",
          }}>
          UFO creates long-term results through habit and behavior change, not restrictive dieting
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            marginBottom: "124px",
            "@media (max-width: 380px)": {
              marginBottom: "24px",
            },
          }}>
          <Box
            sx={{
              width: "343px",
              height: "270px",
            }}>
            <BannerImage />
          </Box>

          <Typography
            variant='h6'
            sx={{
              color: "#999",
              fontSize: "14px",
              fontWeight: "450",
              lineHeight: "150%",
              textAlign: "left",
              marginBottom: "58px",
              "@media (max-width: 380px)": {
                marginBottom: "0px",
              },
            }}>
            Scientific Reports - 78% of participants using UFO lost weight over a 6 month study.
          </Typography>
        </Box>
      </Box>

      <div className='bottom-block'>
        <Button variant='contained' fullWidth onClick={onClose} className='survey-next-button'>
          Got it!
        </Button>
      </div>
    </div>
  );
};
