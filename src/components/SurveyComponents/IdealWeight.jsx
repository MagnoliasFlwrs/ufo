import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { SurveyInput } from ".";
import { useUserStore } from "@/store/store";

export const IdealWeight = ({ onNext }) => {
  const [idealWeight, setIdealWeight] = useState("");
  const [error, setError] = useState("");
  const [isGoalAccepted, setIsGoalAccepted] = useState(null);
  const userWeight = useUserStore((state) => state.weight);
  const userHeight = useUserStore((state) => state.height);

  const updateUserData = useUserStore((state) => state.updateUserData);
  const measurementSystem = useUserStore((state) => state.measurementSystem);

  const isMetric = measurementSystem === "metric";
  const poundsToKg = (pounds) => Math.round(pounds * 0.453592);


  const calculateNormalWeightRange = (heightCm) => {
    const heightM = heightCm / 100;
    const minWeight = 18.5 * heightM * heightM;
    const maxWeight = 24.9 * heightM * heightM;
    return { minWeight, maxWeight };
  };

  const { minWeight, maxWeight } = calculateNormalWeightRange(userHeight);

  const validateWeight = (weightValue) => {
    if (!weightValue) {
      return isMetric
          ? `Please enter the weight in the range of ${Math.round(minWeight)} - ${Math.round(maxWeight)} kg`
          : `Please enter the weight in the range of ${Math.round(minWeight * 2.20462)} - ${Math.round(maxWeight * 2.20462)} lbs`;
    }

    const min = isMetric ? minWeight : minWeight * 2.20462;
    const max = isMetric ? maxWeight : maxWeight * 2.20462;

    if (weightValue < min) {
      return `Please enter a valid from ${Math.round(min)}`;
    }
    return "";
  };

  const checkGoalAcceptance = (weightValue) => {
    const weightInKg = isMetric ? weightValue : poundsToKg(weightValue);
    setIsGoalAccepted(weightInKg >= 50 && weightInKg <= 120);
  };

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
                min: isMetric ? Math.round(minWeight) : Math.round(minWeight * 2.20462),
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
              {isMetric
                  ? `${Math.round(minWeight)} - ${Math.round(maxWeight)} kg`
                  : `${Math.round(minWeight * 2.20462)} - ${Math.round(maxWeight * 2.20462)} lbs`}
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