import { useUserStore } from "@/store/store";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";
import { useEffect, useState } from "react";
import MealDiets from "@/data/MealDiets.json";

export const PreferredMealSchedule = ({ onNext }) => {
  const { mealPreference, dailyCalories, selectMealPlan } = useUserStore();
  const [filteredPlans, setFilteredPlans] = useState([]);

  useEffect(() => {
    if (!mealPreference || !dailyCalories) {
      setFilteredPlans([]);
      return;
    }

    const selectedDiet = MealDiets.find((diet) => diet.type === mealPreference);
    const plans =
      selectedDiet?.plans.filter((plan) => dailyCalories >= plan.kcalMin && dailyCalories <= plan.kcalMax) || [];

    setFilteredPlans(plans);
  }, [mealPreference, dailyCalories]);

  const handleNext = (planId) => {
    selectMealPlan(planId);
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
        {filteredPlans.map((plan) => (
          <BaseSelectButton key={plan.id} onClick={() => handleNext(plan.id)}>
            {plan.title}
          </BaseSelectButton>
        ))}
      </Box>
    </div>
  );
};
