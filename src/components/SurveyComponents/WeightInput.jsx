import { useState, useEffect, useRef } from "react";
import { Button, Typography } from "@mui/material";
import { SurveyInput } from ".";
import { useUserStore } from "@/store/store";

export const WeightInput = ({ onNext }) => {
  const [weight, setWeight] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const updateUserData = useUserStore((state) => state.updateUserData);

  const measurementSystem = useUserStore((state) => state.measurementSystem);
  const height = useUserStore((state) => state.height);

  const isMetric = measurementSystem === "metric";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current && !isFocused) {
        const input = inputRef.current.querySelector("input");
        if (input) {
          input.blur();
          setTimeout(() => {
            input.focus();
          }, 100);
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [isFocused]);

  const poundsToKg = (pounds) => {
    return Math.round(pounds * 0.453592);
  };

  const feetToCm = (feet, inches) => {
    return Math.round(feet * 30.48 + inches * 2.54);
  };

  const calculateWeightBounds = () => {
    if (!height) return { min: isMetric ? 70 : 154, max: isMetric ? 300 : 661 };

    let heightInCm = height;

    if (!isMetric) {
      const [feet, inches] = height.split("'").map(Number);
      heightInCm = feetToCm(feet, inches);
    }

    const minHealthyWeight = Math.round(18.5 * Math.pow(heightInCm / 100, 2));
    const maxHealthyWeight = Math.round(24.9 * Math.pow(heightInCm / 100, 2));

    const buffer = Math.round((maxHealthyWeight - minHealthyWeight) * 1.2);

    return {
      min: Math.max(minHealthyWeight - buffer, isMetric ? 40 : 88),
      max: Math.min(maxHealthyWeight + buffer, isMetric ? 300 : 661),
    };
  };

  const validateWeight = (weightValue) => {
    const bounds = calculateWeightBounds();
    const displayBounds = isMetric
      ? { min: bounds.min, max: bounds.max }
      : { min: Math.round(bounds.min * 2.20462), max: Math.round(bounds.max * 2.20462) };

    if (!weightValue) {
      return isMetric
        ? `Please enter the weight in the range of ${displayBounds.min} - ${displayBounds.max} kg`
        : `Please enter the weight in the range of ${displayBounds.min} - ${displayBounds.max} lbs`;
    }

    if (weightValue < displayBounds.min || weightValue > displayBounds.max) {
      return isMetric
        ? `Please enter a valid weight between ${displayBounds.min} and ${displayBounds.max} kg`
        : `Please enter a valid weight between ${displayBounds.min} and ${displayBounds.max} lbs`;
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
    setIsFocused(true);
    setError(false);
    setErrorMessage("");
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNext();
    }
  };

  const bounds = calculateWeightBounds();
  const displayBounds = isMetric
    ? { min: bounds.min, max: bounds.max }
    : { min: Math.round(bounds.min * 2.20462), max: Math.round(bounds.max * 2.20462) };

  return (
    <div className='content' onKeyDown={handleKeyDown} tabIndex={0}>
      <div>
        <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
          What&apos;s your weight?
        </Typography>

        <div ref={inputRef}>
          <SurveyInput
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              setError(false);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={isMetric ? "Enter your weight in kg" : "Enter your weight in lbs (e.g., 180)"}
            error={error}
            helperText={errorMessage}
            inputProps={{
              min: displayBounds.min,
              max: displayBounds.max,
              step: isMetric ? "1" : "0.1",
              inputMode: "decimal",
              enterKeyHint: "done",
            }}
            label={isMetric ? "kg" : "lbs"}
          />
        </div>
      </div>

      <div className='bottom-block margin-top'>
        <Button variant='contained' fullWidth onClick={handleNext} className='survey-next-button'>
          Next
        </Button>
      </div>
    </div>
  );
};
