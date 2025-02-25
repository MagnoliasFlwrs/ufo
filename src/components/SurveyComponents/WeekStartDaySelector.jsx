import { useUserContext } from "@/state/UserContext";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";

export const WeekStartDaySelector = ({ onNext }) => {
  const { updateUserData } = useUserContext();

  const options = [
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
  ];

  const handleNext = (value) => {
    updateUserData("startDay", value);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main" }}>
        From what day do you prefer to count the beginning of the week?
      </Typography>

      <Typography variant='h6' align='left' className='survey-subtitle'>
        We are asking this in order to customize the meal plan according to your schedule.
      </Typography>

      <Box sx={{ mt: 3 }}>
        {options.map((option) => (
          <BaseSelectButton key={option.value} onClick={() => handleNext(option.value)}>
            {option.label}
          </BaseSelectButton>
        ))}
      </Box>
    </div>
  );
};
