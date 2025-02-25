import { useState } from "react";

export const useUserData = () => {
  const [userData, setUserData] = useState({
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
  });

  const updateUserData = (key, value) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  return { userData, updateUserData };
};
