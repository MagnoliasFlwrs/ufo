import { useUserContext } from "@/state/UserContext";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";

export const PreferredMealSchedule = ({ onNext }) => {
  const { updateUserData } = useUserContext();

  const options = [
    { label: "Pesco 1400-1600 (3 times no snacks)", value: "3 times" },
    { label: "Pesco 1400-1600 (3 times + 1  snack)", value: "3 times + 1 snack" },
  ];

  const handleNext = (value) => {
    updateUserData("mealSchedule", value);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
        What meal schedule works best for you?
      </Typography>

      <Typography variant='h6' align='left' className='survey-subtitle'>
        The meal schedule directly impacts your meal plan, choose the one that suits you best.
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
