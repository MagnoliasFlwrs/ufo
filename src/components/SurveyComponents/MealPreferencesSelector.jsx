import { useUserContext } from "@/state/UserContext";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";

export const MealPreferencesSelector = ({ onNext }) => {
  const { updateUserData } = useUserContext();

  const options = [
    { label: "Classic", value: "Classic" },
    { label: "Pescatarian", value: "Pescatarian" },
    { label: "Vegetarian", value: "Vegetarian" },
    { label: "Fully plant-based", value: "Fully plant-based" },
  ];

  const handleNext = (value) => {
    updateUserData("mealPreference", value);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
        What are your meal preferences?
      </Typography>

      <Typography variant='h6' align='left' className='survey-subtitle'>
        Meal plan will be configured according to your preferences.
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
