import { TextField, InputAdornment } from "@mui/material";

export const SurveyInput = ({ value, onChange, onFocus, placeholder, error, helperText, inputProps, label }) => {
  return (
    <TextField
      fullWidth
      type='number'
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
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
            {label}
          </InputAdornment>
        ),
        inputProps: inputProps,
      }}
      error={error}
      helperText={helperText}
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
  );
};
