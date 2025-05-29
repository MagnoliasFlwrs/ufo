import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { SurveyInput } from ".";
import { useUserStore } from "@/store/store";

export const IdealWeight = ({ onNext }) => {
  const [idealWeight, setIdealWeight] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Получаем данные из хранилища
  const userHeight = useUserStore((state) => state.height);
  const currentWeight = useUserStore((state) => state.weight);
  const measurementSystem = useUserStore((state) => state.measurementSystem);
  const updateUserData = useUserStore((state) => state.updateUserData);

  const isMetric = measurementSystem === "metric";

  // Константы и преобразования
  const MIN_WEIGHT_KG = 40;
  const MIN_WEIGHT_LBS = Math.round(MIN_WEIGHT_KG * 2.20462);
  const currentWeightLbs = Math.round(currentWeight * 2.20462);

  // Функции преобразования
  const poundsToKg = (pounds) => Math.round(pounds * 0.453592);
  const kgToPounds = (kg) => Math.round(kg * 2.20462);

  // Расчет здорового диапазона веса
  const calculateNormalWeightRange = (heightCm) => {
    const heightM = heightCm / 100;
    const minWeight = 18.5 * heightM * heightM;
    const maxWeight = 24.9 * heightM * heightM;
    return { minWeight, maxWeight };
  };

  const { minWeight, maxWeight } = calculateNormalWeightRange(userHeight);

  // Валидация введенного веса
  const validateWeight = (value) => {
    const weightValue = parseFloat(value);

    if (isNaN(weightValue)) {
      return "Please enter a valid number";
    }

    if (weightValue < (isMetric ? MIN_WEIGHT_KG : MIN_WEIGHT_LBS)) {
      return `Minimum weight is ${isMetric ? MIN_WEIGHT_KG : MIN_WEIGHT_LBS} ${isMetric ? "kg" : "lbs"}`;
    }

    if (weightValue > (isMetric ? currentWeight : currentWeightLbs)) {
      return `Your ideal weight should be less than current weight (${isMetric ? currentWeight : currentWeightLbs} ${
        isMetric ? "kg" : "lbs"
      })`;
    }

    return "Goal accepted!";
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    setIdealWeight(value);

    if (isTouched) {
      setErrorMessage(validateWeight(value));
    }
  };

  const handleFocus = () => {
    setIsTouched(true);
  };

  const handleNext = () => {
    if (!isTouched) setIsTouched(true);

    const validationMessage = validateWeight(idealWeight);
    setErrorMessage(validationMessage);

    if (validationMessage !== "Goal accepted!") return;

    const weightInKg = isMetric ? parseFloat(idealWeight) : poundsToKg(parseFloat(idealWeight));

    updateUserData("idealWeight", weightInKg);
    onNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNext();
    }
  };

  const isButtonDisabled = !idealWeight || errorMessage !== "Goal accepted!";

  // Параметры для поля ввода
  const inputProps = {
    min: isMetric ? MIN_WEIGHT_KG : MIN_WEIGHT_LBS,
    max: isMetric ? currentWeight : currentWeightLbs,
    step: isMetric ? "1" : "0.1",
  };

  return (
    <div className='content' onKeyDown={handleKeyDown} tabIndex={0}>
      <div>
        <Typography variant='h6' align='left' gutterBottom sx={{ color: "primary.main", fontWeight: 450 }}>
          What is your ideal weight that you want to reach?
        </Typography>

        <div id='ideal-weight-input'>
          <SurveyInput
            value={idealWeight}
            onChange={handleWeightChange}
            onFocus={handleFocus}
            placeholder={isMetric ? "Enter your weight in kg" : "Enter your weight in lbs (e.g., 180)"}
            error={!!errorMessage && errorMessage !== "Goal accepted!"}
            helperText={errorMessage}
            inputProps={inputProps}
            label={isMetric ? "kg" : "lbs"}
          />
        </div>

        {/* <Typography variant='caption' sx={{ display: "block", mt: 1, color: "text.secondary" }}>
          Must be between {isMetric ? MIN_WEIGHT_KG : MIN_WEIGHT_LBS} and {isMetric ? currentWeight : currentWeightLbs}{" "}
          {isMetric ? "kg" : "lbs"}
        </Typography> */}

        <div style={{ marginTop: "24px" }}>
          <Typography variant='h6' align='left' className='survey-subtitle'>
            We are checking your data for compliance with the World Health Organization&apos;s safety standards.
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

      <div className='bottom-block margin-top'>
        <Button
          variant='contained'
          fullWidth
          onClick={handleNext}
          className='email-button'
          sx={{
            backgroundColor: "#FF5C1D",
            "&:hover": {
              backgroundColor: "#FF4500",
            },
            "&:disabled": {
              backgroundColor: "#FF8D63",
              color: "white",
            },
          }}
          disabled={isButtonDisabled}>
          Next
        </Button>
      </div>
    </div>
  );
};
