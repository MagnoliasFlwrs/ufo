import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { UfoLogo } from "@/components/Paddle";

import img1 from "../../Site/site-images/expirienceBanner1.webp";
import img2 from "../../Site/site-images/expirienceBanner2.webp";
import img3 from "../../Site/site-images/expirienceBanner3.webp";
import img4 from "../../Site/site-images/expirienceBanner4.webp";
import img5 from "../../Site/site-images/expirienceBanner5.webp";

export const ExperiencePromoBanner = ({ onClose }) => {
  const data = [
    { id: 1, image: img1, title: "Our weight loss program is based on behavior change" },
    { id: 2, image: img2, title: "Change your relationship with food in only 10 minutes a day" },
    { id: 3, image: img3, title: "The best part? You can still eat your favorite foods. Nothing is off limits!" },
    { id: 4, image: img4, title: "We help you track green, yellow, and orange foods based on caloric density" },
    { id: 5, image: img5, title: "Don’t worry if you mess up. We will be there every step of the way" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dots, setDots] = useState("");

  const [animationParent] = useAutoAnimate({ duration: 300, easing: "ease-in-out" });

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 3000);

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    const timer = setTimeout(() => {
      clearInterval(slideInterval);
      clearInterval(dotInterval);
      onClose?.();
    }, 15000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(dotInterval);
      clearTimeout(timer);
    };
  }, [data.length, onClose]);

  return (
    <div className='content'>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <UfoLogo />

        <Box
          ref={animationParent}
          className='banner-slide'
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justifyContent: "space-between",
            height: "485px",
            marginBottom: "74px",
          }}>
          <Box
            key={currentSlide}
            sx={{
              maxWidth: "311px",
            }}>
            <Typography
              variant='h6'
              sx={{
                color: "#241063",
                fontSize: "24px",
                fontWeight: "500",
                lineHeight: "120%",
                marginBottom: "58px",
                textAlign: "center",
              }}>
              {data[currentSlide].title}
            </Typography>

            <Box>
              <img
                src={data[currentSlide].image}
                alt='banner-image'
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <div className='bottom-block'>
        <Typography
          variant='h6'
          sx={{
            color: "#241063",
            fontSize: "14px",
            fontWeight: "450",
            lineHeight: "150%",
            textAlign: "center",
          }}>
          Building a plan{dots}
        </Typography>
      </div>
    </div>
  );
};
