import { create } from "zustand";
import MealDiets from "@/data/MealDiets.json";
import { calculateCalories } from "@/utils/calculations";

export const useUserStore = create((set) => ({
  measurementSystem: "metric",
  age: "",
  gender: "",
  height: "",
  weight: "",
  idealWeight: "",
  wishlist: [],
  listOfIntentions: [],
  inspiringEvents: [],
  fastFoodTime: "",
  nonHungerTriggers: [],
  dietingHistory: [],
  weightLossSuccess: "",
  mealPreference: "",
  startDay: "",
  mealSchedule: "",
  weeklyActivities: "",
  healthConditions: [],
  dailyCalories: null,
  selectedMealPlan: null,

  paymentData: {
    email: null,
    checkoutId: null,
    orderId: null,
    subscriptionId: null,
  },

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

  setPaymentData: (paymentData) =>
    set({
      paymentData: {
        email: paymentData.email,
        checkoutId: paymentData.checkoutId,
        orderId: paymentData.orderId,
        subscriptionId: paymentData.subscriptionId,
      },
    }),
}));
