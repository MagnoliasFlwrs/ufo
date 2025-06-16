import { useUserStore } from "@/store/store";
import { Typography, Box } from "@mui/material";
import { BaseSelectButton } from ".";
import { useEffect, useState } from "react";
import MealDiets from "@/data/MealDiets.json";

export const PreferredMealSchedule = ({ onNext }) => {
  const { mealPreference = "classic", dailyCalories, selectMealPlan } = useUserStore();
  const [filteredPlans, setFilteredPlans] = useState([]);

  useEffect(() => {
    if (!dailyCalories) {
      setFilteredPlans([]);
      return;
    }

    // Используем "classic" как тип по умолчанию, если не выбран
    const dietType = mealPreference || "classic";
    const selectedDiet = MealDiets.find((diet) => diet.type === dietType);

    if (!selectedDiet) {
      setFilteredPlans([]);
      return;
    }

    // Находим минимальный и максимальный диапазоны среди всех планов
    const allKcalMins = selectedDiet.plans.map((plan) => plan.kcalMin);
    const allKcalMaxes = selectedDiet.plans.map((plan) => plan.kcalMax);
    const absoluteMin = Math.min(...allKcalMins);
    const absoluteMax = Math.max(...allKcalMaxes);

    let suitablePlans = [];

    if (dailyCalories > absoluteMax) {
      // Показываем планы с максимальными калориями
      suitablePlans = selectedDiet.plans.filter((plan) => plan.kcalMax === absoluteMax);
    } else if (dailyCalories < absoluteMin) {
      // Показываем планы с минимальными калориями
      suitablePlans = selectedDiet.plans.filter((plan) => plan.kcalMin === absoluteMin);
    } else {
      // Обычная фильтрация по диапазону
      suitablePlans = selectedDiet.plans.filter(
        (plan) => dailyCalories > plan.kcalMin && dailyCalories <= plan.kcalMax,
      );
    }

    setFilteredPlans(suitablePlans);
  }, [mealPreference, dailyCalories]);

  const handleNext = (planId) => {
    selectMealPlan(planId);
    onNext();
  };

  return (
    <Box component='div'>
      <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }} component='div'>
        What meal schedule works best for you?
      </Typography>

      <Typography variant='h6' align='left' className='survey-subtitle' component='div'>
        The meal schedule directly impacts your meal plan, choose the one that suits you best.
      </Typography>

      {filteredPlans.length > 0 && (
        <Box sx={{ mt: 3 }}>
          {filteredPlans.map((plan) => (
            <BaseSelectButton key={plan.id} onClick={() => handleNext(plan.id)} sx={{ textAlign: "left" }}>
              <Box component='span'>
                {plan.title}
                <Box
                  component='span'
                  sx={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "text.secondary",
                  }}>
                  ({plan.kcalMin}-{plan.kcalMax} kcal)
                </Box>
              </Box>
            </BaseSelectButton>
          ))}
        </Box>
      )}
    </Box>
  );
};
