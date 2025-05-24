import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import bannerImage from "../../Site/site-images/banner1.png";
import { UfoLogo } from "@/components/Paddle";

export const StickingToAPlanBanner = ({ onNext }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onNext();
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
            marginBottom: "39px",
          }}>
          Sticking to a plan can be hard, UFO makes it easy
        </Typography>
        <Box
          sx={{
            width: "317px",
            height: "399px",
            marginBottom: "94px",
          }}>
          <img
            src={bannerImage}
            alt='banner-image'
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
          />
        </Box>
      </Box>

      <div className='bottom-block'>
        <Button variant='contained' fullWidth onClick={onNext} className='survey-next-button'>
          Got it!
        </Button>
      </div>
    </div>
  );
};
