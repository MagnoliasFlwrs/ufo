import { useState, useEffect, useRef } from "react";
import { Button, Typography } from "@mui/material";
import { SurveyInput } from ".";
import { useUserStore } from "@/store/store";

export const AgeInput = ({ onNext }) => {
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  const updateUserData = useUserStore((state) => state.updateUserData);

  useEffect(() => {
    // Фокус и поднятие клавиатуры через небольшой таймаут
    const timer = setTimeout(() => {
      if (inputRef.current) {
        const input = inputRef.current.querySelector("input");
        if (input) {
          input.focus();
          // Для iOS устройств
          input.setAttribute("inputmode", "numeric");
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    const ageNumber = parseInt(age, 10);

    if (!age) {
      setError(true);
      setErrorMessage("Please enter your age from 18 to 100.");
      return;
    }

    if (ageNumber < 18 || ageNumber > 100) {
      setError(true);
      setErrorMessage("Please enter a valid age between 18 and 100.");
      return;
    }

    setError(false);
    setErrorMessage("");
    updateUserData("age", ageNumber);
    onNext();
  };

  const handleFocus = () => {
    setError(false);
    setErrorMessage("");
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
          How old are you?
        </Typography>

        <Typography variant='h6' align='left' className='survey-subtitle'>
          We ask this to personalize UFO program for you.
        </Typography>

        <div ref={inputRef}>
          <SurveyInput
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setError(false);
            }}
            onFocus={handleFocus}
            placeholder='Enter your age'
            error={error}
            helperText={errorMessage}
            inputProps={{
              min: 18,
              max: 100,
              inputMode: "numeric",
            }}
            label='years'
          />
        </div>
      </div>

      <div className='bottom-block'>
        <Button variant='contained' fullWidth onClick={handleNext} className='survey-next-button'>
          Next
        </Button>
      </div>
    </div>
  );
};
