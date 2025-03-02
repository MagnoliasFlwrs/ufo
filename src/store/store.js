import { create } from "zustand";

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

  updateUserData: (key, value) =>
    set((state) => {
      console.log(`Updating ${key} to:`, value);
      console.log("Previous state:", state);

      return {
        ...state,
        [key]: value,
      };
    }),
}));
