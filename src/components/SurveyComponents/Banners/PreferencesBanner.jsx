import React, { useState, useEffect } from "react";
import img1 from "../../Site/site-images/preferences1.webp";
import img2 from "../../Site/site-images/preferences2.webp";
import img3 from "../../Site/site-images/preferences3.webp";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { PreferencesBannerCaloryItem } from ".";

export const PreferencesBanner = ({ onClose }) => {
  const data = [
    {
      id: "1",
      title: "... no guilty pleasure, only nutritious calories",
      image: img1,
      label: "#144 pumpkin pancakes",
      protein: { gr: "16g", percent: "23%" },
      carbs: { gr: "73g", percent: "45%" },
      fat: { gr: "17g", percent: "28%" },
    },
    {
      id: "2",
      title: "... convenient to take with you for a snack",
      image: img2,
      label: "#98 berries super smoothie",
      protein: { gr: "33g", percent: "40%" },
      carbs: { gr: "57g", percent: "35%" },
      fat: { gr: "8g", percent: "16%" },
    },
    {
      id: "3",
      title: "... reimagining your top foods in a new style",
      image: img3,
      label: "#17 bagel with salmon",
      protein: { gr: "21g", percent: "26%" },
      carbs: { gr: "46g", percent: "30%" },
      fat: { gr: "9g", percent: "18%" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState(new Set());
  const [isReady, setIsReady] = useState(false);
  const [animationParent] = useAutoAnimate();

  // Предзагрузка изображений
  useEffect(() => {
    data.forEach((item, index) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        setLoadedSlides((prev) => new Set(prev).add(index));
      };
    });
  }, []);

  // Запуск анимации после загрузки
  useEffect(() => {
    if (loadedSlides.size === data.length) {
      setIsReady(true);

      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === data.length - 1) {
            return prev;
          }
          return prev + 1;
        });
      }, 4000);

      const timeoutId = setTimeout(() => {
        clearInterval(interval);
        onClose?.();
      }, data.length * 4000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeoutId);
      };
    }
  }, [loadedSlides, data.length, onClose]);

  if (!isReady) {
    return (
      <Box sx={{ height: "485px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress sx={{ color: "#241063" }} />
      </Box>
    );
  }

  const currentSlide = data[currentIndex];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        flexGrow: 1,
        "@media (max-width: 576px)": {
          height: "calc(100vh - 40px)",
        },
      }}>
      <CircularProgress size='30px' sx={{ color: "#FF5C1D" }} />

      <Box
        ref={animationParent}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flexGrow: 1,
        }}>
        <Box key={currentSlide.id} sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "24px",
              fontWeight: "450",
              lineHeight: "130%",
              textAlign: "center",
              padding: "10px",
            }}>
            {currentSlide.title}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", padding: "16px 0" }}>
            <PreferencesBannerCaloryItem
              name='protein'
              gr={currentSlide.protein.gr}
              percent={currentSlide.protein.percent}
            />
            <PreferencesBannerCaloryItem name='carbs' gr={currentSlide.carbs.gr} percent={currentSlide.carbs.percent} />
            <PreferencesBannerCaloryItem name='fat' gr={currentSlide.fat.gr} percent={currentSlide.fat.percent} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              position: "relative",
              marginTop: "50px",
              display: "flex",
              alignItems: "flex-end",

              "@media (max-width: 576px)": {
                marginTop: "20px",
              },
            }}>
            <img className='responsive-banner-img' src={currentSlide.image} alt='banner' />

            <Typography
              variant='h6'
              sx={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                backgroundColor: "#EAE3FE",
                borderRadius: "1px",
                color: "#241063",
                fontSize: "24px",
                fontWeight: "450",
                padding: "0 3px",
              }}>
              {currentSlide.label}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
