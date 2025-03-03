import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { SurveyInput } from ".";
import { useUserStore } from "@/store/store";

export const IdealWeight = ({ onNext }) => {
  const [idealWeight, setIdealWeight] = useState("");
  const [error, setError] = useState("");
  const [isGoalAccepted, setIsGoalAccepted] = useState(null);

  const updateUserData = useUserStore((state) => state.updateUserData);
  const measurementSystem = useUserStore((state) => state.measurementSystem);

  const isMetric = measurementSystem === "metric";
  const poundsToKg = (pounds) => Math.round(pounds * 0.453592);

  // Validate weight input
  const validateWeight = (weightValue) => {
    if (!weightValue) {
      return isMetric
        ? "Please enter the weight in the range of 70 - 300 kg"
        : "Please enter the weight in the range of 154 - 661 lbs";
    }

    const min = isMetric ? 70 : 154;
    const max = isMetric ? 300 : 661;

    if (weightValue < min || weightValue > max) {
      return `Please enter a valid weight between ${min} and ${max} ${isMetric ? "kg" : "lbs"}`;
    }

    return "";
  };

  // Check if the weight meets WHO standards
  const checkGoalAcceptance = (weightValue) => {
    const weightInKg = isMetric ? weightValue : poundsToKg(weightValue);
    setIsGoalAccepted(weightInKg >= 50 && weightInKg <= 120);
  };

  // Handle input change
  const handleWeightChange = (e) => {
    const value = e.target.value;
    setIdealWeight(value);

    const weightValue = parseFloat(value);
    if (!isNaN(weightValue)) {
      checkGoalAcceptance(weightValue);
      setError(validateWeight(weightValue));
    } else {
      setIsGoalAccepted(null);
      setError("");
    }
  };

  // Handle next button click
  const handleNext = () => {
    const weightValue = parseFloat(idealWeight);
    const validationError = validateWeight(weightValue);

    if (validationError) {
      setError(validationError);
      return;
    }

    const weightInKg = isMetric ? weightValue : poundsToKg(weightValue);
    updateUserData("idealWeight", weightInKg);
    onNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNext();
    }
  };

  return (
    <div className='content' onKeyDown={handleKeyDown} tabIndex={0}>
      <div>
        <Typography variant='h6' align='left' gutterBottom sx={{ color: "primary.main", fontWeight: 450 }}>
          What is your ideal weight that you want to reach?
        </Typography>

        <SurveyInput
          value={idealWeight}
          onChange={handleWeightChange}
          placeholder={isMetric ? "Enter your weight in kg" : "Enter your weight in lbs (e.g., 180)"}
          error={!!error}
          helperText={error}
          inputProps={{
            min: isMetric ? 70 : 154,
            max: isMetric ? 300 : 661,
            step: isMetric ? "1" : "0.1",
          }}
          label={isMetric ? "kg" : "lbs"}
        />

        <div style={{ marginTop: "24px" }}>
          <Typography variant='body2' className='accept-text'>
            {isGoalAccepted ? "Goal accepted!" : "Goal cannot be accepted"}
          </Typography>

          <Typography variant='h6' align='left' className='survey-subtitle'>
            We are checking your data for compliance with the World Health Organization's safety standards.
          </Typography>
        </div>

        <Box sx={{ mt: 5, p: 2, backgroundColor: "#F5F5F5", borderRadius: "12px", border: "0.4px solid #DFDFDF" }}>
          <Typography variant='h6' sx={{ color: "primary.main", lineHeight: "1.2", marginBottom: "16px" }}>
            Recommended weight range:
            <br />
            65 - 75 kg
          </Typography>

          <Typography variant='h6' align='justify' className='survey-subtitle'>
            Using data from UFO users, we will predict when you will hit your target weight if you follow your custom
            meal plan and personal course. A healthy lifestyle will allow you to lose 0.5 - 1 kg per week in a natural
            manner.
          </Typography>
        </Box>
      </div>

      <Button variant='contained' fullWidth onClick={handleNext} className='survey-next-button'>
        Next
      </Button>
    </div>
  );
};
