import { create } from "zustand";
import MealDiets from "@/data/MealDiets.json";
import { calculateCalories } from "@/utils/calculations";

export const useUserStore = create((set) => ({
  updateUserData: (key, value) =>
    set((state) => {
      const newState = { ...state, [key]: value };

      if (["gender", "age", "height", "weight", "weeklyActivities"].includes(key)) {
        newState.dailyCalories = calculateCalories(newState);
      }

      return newState;
    }),

  selectMealPlan: (planId) =>
    set((state) => {
      const allPlans = MealDiets.flatMap((diet) => diet.plans);
      const selectedPlan = allPlans.find((plan) => plan.id === planId);

      return {
        mealSchedule: planId,
        selectedMealPlan: selectedPlan || null,
      };
    }),
}));
