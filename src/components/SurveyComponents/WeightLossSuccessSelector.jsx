import { useUserStore } from "@/store/store";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";

export const WeightLossSuccessSelector = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    { label: "Yes, but here we go again", value: "again" },
    { label: "Not as good as I would like", value: "notGood" },
    { label: "Yes and I keep going", value: "going" },
    { label: "Not really successful", value: "notReally" },
    { label: "I’ve never tried before", value: "never" },
  ];

  const handleNext = (value) => {
    updateUserData("weightLossSuccess", value);
    onNext();
  };

  return (
    <div>
      <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
        Have you successfully lost weight before?
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
