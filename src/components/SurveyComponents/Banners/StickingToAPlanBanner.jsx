import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import bannerImage from "../../Site/site-images/banner1.webp";
import { UfoLogo } from "@/components/Stripe";

export const StickingToAPlanBanner = ({ onNext }) => {
  const containerRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Предзагрузка изображения
  useEffect(() => {
    const img = new Image();
    img.src = bannerImage;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => {
      console.error("Error loading banner image");
      setIsImageLoaded(true); // Все равно продолжаем работу
    };
  }, []);

  // Установка фокуса после загрузки
  useEffect(() => {
    if (isImageLoaded && containerRef.current) {
      containerRef.current.focus();
    }
  }, [isImageLoaded]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onNext();
    }
  };

  return (
    <div className='content'>
      {!isImageLoaded ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <CircularProgress sx={{ color: "#241063" }} />
        </Box>
      ) : (
        <>
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

            <Box sx={{ width: "317px", height: "399px", marginBottom: "94px" }}>
              <img
                src={bannerImage}
                alt='banner-image'
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>

          <div className='bottom-block'>
            <Button variant='contained' fullWidth onClick={onNext} className='survey-next-button'>
              Got it!
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
