import { useState } from "react";
import { useUserContext } from "@/state/UserContext";
import { Button, Typography, TextField, InputAdornment } from "@mui/material";

export const AgeInput = ({ onNext }) => {
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { updateUserData } = useUserContext();

  const handleNext = () => {
    const ageNumber = parseInt(age, 10);

    if (!age) {
      setError(true);
      setErrorMessage("Please enter your age from 18 to 40.");
      return;
    }

    if (ageNumber < 18 || ageNumber > 40) {
      setError(true);
      setErrorMessage("Please enter a valid age between 18 and 40.");
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

  return (
    <div style={{ height: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <Typography variant='h6' align='left' gutterBottom sx={{ color: "primary.main" }}>
          How old are you?
        </Typography>

        <Typography variant='h6' align='left' gutterBottom className='survey-subtitle'>
          We ask this to personalize UFO program for you.
        </Typography>

        <TextField
          fullWidth
          type='number'
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            setError(false);
          }}
          onFocus={handleFocus}
          placeholder='Enter your age'
          variant='outlined'
          sx={{ mt: 3 }}
          className='survey-input'
          InputProps={{
            endAdornment: (
              <InputAdornment
                position='end'
                sx={{
                  fontSize: "20px !important",
                  fontWeight: "450 !important",
                  color: "vars.$primary-color !important",
                }}>
                years{" "}
              </InputAdornment>
            ),
            inputProps: {
              min: 18,
              max: 40,
            },
          }}
          error={error}
          helperText={errorMessage}
          FormHelperTextProps={{
            sx: {
              textAlign: "left",
              fontSize: "14px",
              fontWeight: 500,
              marginLeft: "0",
              marginTop: "24px",
            },
          }}
        />
      </div>

      <Button variant='contained' fullWidth onClick={handleNext} className='survey-next-button'>
        Next
      </Button>
    </div>
  );
};
