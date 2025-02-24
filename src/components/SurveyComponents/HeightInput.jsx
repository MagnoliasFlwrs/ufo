import { useState } from "react";
import { useUserContext } from "@/state/UserContext";
import { Button, Typography } from "@mui/material";
import { SurveyInput } from ".";

export const HeightInput = ({ onNext }) => {
  const [height, setHeight] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { updateUserData, userData } = useUserContext();

  const isMetric = userData.measurementSystem === "metric";

  const feetToCm = (feet) => {
    return Math.round(feet * 30.48);
  };

  const validateHeight = (heightValue) => {
    if (!heightValue) {
      return isMetric
        ? "Please enter the height in the range of 120 - 240 cm"
        : "Please enter the height in the range of 4 - 8 ft";
    }

    if (isMetric) {
      if (heightValue < 120 || heightValue > 240) {
        return "Please enter a valid height between 120 and 240 cm";
      }
    } else {
      if (heightValue < 4 || heightValue > 8) {
        return "Please enter a valid height between 4 and 8 ft";
      }
    }

    return "";
  };

  const handleNext = () => {
    const heightValue = parseFloat(height);
    const validationError = validateHeight(heightValue);

    if (validationError) {
      setError(true);
      setErrorMessage(validationError);
      return;
    }

    setError(false);
    setErrorMessage("");

    const heightInCm = isMetric ? heightValue : feetToCm(heightValue);
    updateUserData("height", heightInCm);

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
          What’s your height?
        </Typography>

        <SurveyInput
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
            setError(false);
          }}
          onFocus={handleFocus}
          placeholder={isMetric ? "Enter your height in cm" : "Enter your height in ft (e.g., 5.68)"}
          error={error}
          helperText={errorMessage}
          inputProps={{
            min: isMetric ? 120 : 4,
            max: isMetric ? 240 : 8,
            step: isMetric ? "1" : "0.01",
          }}
          label={isMetric ? "cm" : "ft"}
        />
      </div>

      <Button variant='contained' fullWidth onClick={handleNext} className='survey-next-button'>
        Next
      </Button>
    </div>
  );
};
