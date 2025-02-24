import { useState } from "react";
import { useUserContext } from "@/state/UserContext";
import { Button, Typography } from "@mui/material";
import { SurveyInput } from ".";

export const WeightInput = ({ onNext }) => {
  const [weight, setWeight] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { updateUserData, userData } = useUserContext();

  const isMetric = userData.measurementSystem === "metric";

  const poundsToKg = (pounds) => {
    return Math.round(pounds * 0.453592);
  };

  const validateWeight = (weightValue) => {
    if (!weightValue) {
      return isMetric
        ? "Please enter the weight in the range of 70 - 300 kg"
        : "Please enter the weight in the range of 154 - 661 lbs";
    }

    if (isMetric) {
      if (weightValue < 70 || weightValue > 300) {
        return "Please enter a valid weight between 70 and 300 kg";
      }
    } else {
      if (weightValue < 154 || weightValue > 661) {
        return "Please enter a valid weight between 154 and 661 lbs";
      }
    }

    return "";
  };

  const handleNext = () => {
    const weightValue = parseFloat(weight);
    const validationError = validateWeight(weightValue);

    if (validationError) {
      setError(true);
      setErrorMessage(validationError);
      return;
    }

    setError(false);
    setErrorMessage("");

    const weightInKg = isMetric ? weightValue : poundsToKg(weightValue);
    updateUserData("weight", weightInKg);

    onNext();
  };

  const handleFocus = () => {
    setError(false);
    setErrorMessage("");
  };

  return (
    <div style={{ height: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <Typography variant='h6' align='left' gutterBottom sx={{ color: "primary.main" }}>
          What’s your weight?
        </Typography>

        <SurveyInput
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
            setError(false);
          }}
          onFocus={handleFocus}
          placeholder={isMetric ? "Enter your weight in kg" : "Enter your weight in lbs (e.g., 180)"}
          error={error}
          helperText={errorMessage}
          inputProps={{
            min: isMetric ? 70 : 154,
            max: isMetric ? 300 : 661,
            step: isMetric ? "1" : "0.1",
          }}
          label={isMetric ? "kg" : "lbs"}
        />
      </div>

      <Button variant='contained' fullWidth onClick={handleNext} className='survey-next-button'>
        Next
      </Button>
    </div>
  );
};
