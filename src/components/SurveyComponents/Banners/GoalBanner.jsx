import { Box, Button, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useUserStore } from "@/store/store.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { DescendingGraphSvg } from "./DescendingGraphSvg";
import { StraightGraphSvg } from "./StraightGraphSvg";

import { convertWeight, calculateGoalDate, isSmallWeightDifference } from "@/utils/weightUtils";

export const GoalBanner = () => {
  const idealWeight = Number(useUserStore((state) => state.idealWeight));
  const userWeight = Number(useUserStore((state) => state.weight));
  const measurementSystem = useUserStore((state) => state.measurementSystem);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    navigate("/subscribe");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const goalDate = calculateGoalDate(userWeight, idealWeight);
  const formattedGoalDate = goalDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const isSmallDifference = isSmallWeightDifference(userWeight, idealWeight);
  const currentWeightDisplay = `${convertWeight(userWeight, measurementSystem)} ${
    measurementSystem === "imperial" ? "lbs" : "kg"
  }`;
  const idealWeightDisplay = `${convertWeight(idealWeight, measurementSystem)} ${
    measurementSystem === "imperial" ? "lbs" : "kg"
  }`;

  return (
    <Box ref={containerRef} tabIndex={0} onKeyDown={handleKeyDown} sx={{ outline: "none" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 16px",
          backgroundColor: "#F5F5F5",
          borderRadius: "5px",
          marginBottom: "24px",
        }}>
        <Typography
          variant='h6'
          sx={{
            color: "#241063",
            fontSize: "14px",
            fontWeight: "500",
            textAlign: "center",
            lineHeight: "130%",
          }}>
          THE LAST EFFORT TO CHANGE LIFESTYLE YOU NEED
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "44px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "center" }}>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "130%",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
            We predict you’ll be
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "120%",
              textAlign: "center",
            }}>
            {idealWeightDisplay} by {formattedGoalDate}
          </Typography>

          {/* SVG графики */}
          <Box sx={{ position: "relative", width: "100%", height: "140px", mt: 2 }}>
            {isSmallDifference ? (
              <>
                <StraightGraphSvg />
                <Box
                  sx={{
                    position: "absolute",
                    top: "38%",
                    left: "10px",
                    color: "#241063",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}>
                  {currentWeightDisplay}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "8%",
                    left: "50%",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}>
                  Goal <br />
                  {idealWeightDisplay}
                </Box>
              </>
            ) : (
              <>
                <DescendingGraphSvg />
                <Box
                  sx={{
                    position: "absolute",
                    top: "5px",
                    left: "10px",
                    color: "#241063",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}>
                  {currentWeightDisplay}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}>
                  Goal <br />
                  {idealWeightDisplay}
                </Box>
              </>
            )}

            {/* Месяцы под графиком */}
            <Box
              sx={{
                position: "absolute",
                bottom: 5,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                px: 5,
                color: "#999",
                fontSize: "12px",
                fontWeight: "500",
                letterSpacing: "1px",
              }}>
              <span>{new Date().toLocaleString("en-US", { month: "long" }).toUpperCase()}</span>
              <span>{goalDate.toLocaleString("en-US", { month: "long" }).toUpperCase()}</span>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
          <Typography
            variant='h6'
            sx={{
              color: "#FF5C1D",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "130%",
            }}>
            Great news!
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: "#999",
              fontSize: "14px",
              fontWeight: "450",
              lineHeight: "130%",
              textAlign: "left",
            }}>
            Based on UFO users like you we predict you’ll be able to hit your weight loss goal by {formattedGoalDate}.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          backgroundColor: "#F5F5F5",
          borderRadius: "5px",
          border: "0.4px solid #DFDFDF",
          padding: "16px",
          marginBottom: "50px",
        }}>
        {[
          "You’ll understand the reasons for your eating behavior",
          "You’ll build harmonious relationships with yourself",
          "You’ll build new healthy habits",
          "You’ll feel better",
        ].map((text, i) => (
          <Box key={i} sx={{ display: "flex", gap: "8px" }}>
            <CheckIcon sx={{ color: "#241063" }} />
            <Typography
              variant='h6'
              sx={{
                color: "#241063",
                fontSize: "16px",
                fontWeight: "450",
                lineHeight: "120%",
                textAlign: "left",
              }}>
              {text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button variant='contained' fullWidth onClick={handleClick} className='survey-next-button'>
        Next
      </Button>
    </Box>
  );
};
