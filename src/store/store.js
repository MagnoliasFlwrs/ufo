import { create } from "zustand";
import MealDiets from "@/data/MealDiets.json";
import { calculateCalories } from "@/utils/calculations";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import {db} from "@/firebase.js";

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

  customerData: null,

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

  setPaymentData: (data) => set({ customerData: data }),
}));

export const useFirestoreDataStore = create((set) => ({
    createUser: async ({ email, password, name, onboardingData }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                name,
                email,
                uid: user.uid,
                createdAt: new Date(),
            });

            await setDoc(doc(db, 'users', user.uid, 'onboarding_user_info', user.uid), onboardingData);

            alert('Пользователь успешно создан и добавлен в Firestore!');
        } catch (error) {
            alert(error.message);
        }
    }

}));
