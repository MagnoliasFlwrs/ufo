import { useUserStore } from "@/store/store";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";

export const WeeklyActivities = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    {
      label: "Sedentary work, no exercises, rare walks and passion to change lifestyle",
      value: "sedentary",
      coefficient: "1x",
    },
    {
      label: "Lightly active lifestyle, about 2 hours of intentional exercises a week",
      value: "lightly_active",
      coefficient: "1.5x",
    },
    {
      label: "Moderately active days, about 5 hours of intentional exercises a week",
      value: "moderately_active",
      coefficient: "2x",
    },
    {
      label: "Very active schedule, about 7 hours of intentional exercises a week",
      value: "very_active",
      coefficient: "2.5x",
    },
  ];

  const handleNext = (value) => {
    updateUserData("weeklyActivities", value);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main" }}>
        Which best describes your weekly activities?
      </Typography>

      <Box sx={{ mt: 3 }}>
        {options.map((option) => (
          <BaseSelectButton key={option.value} onClick={() => handleNext(option.value)} rightText={option.coefficient}>
            {option.label}
          </BaseSelectButton>
        ))}
      </Box>
    </div>
  );
};
