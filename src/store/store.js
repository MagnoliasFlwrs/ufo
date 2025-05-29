import { create } from "zustand";
import MealDiets from "@/data/MealDiets.json";
import { calculateCalories } from "@/utils/calculations";
import { sendSignInLinkToEmail, signInWithEmailLink, signInAnonymously } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase.js";

export const useUserStore = create((set) => ({
  measurementSystem: "",
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
  email: null,

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

  createUser: async ({ email, mealPreference, startDay, onboardingData, password }) => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }


      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        userEmail: email,
        password: password,
        userId: user.uid,
        createdAt: new Date(),
        



        isOnboardingPassed: true
      };

      if (mealPreference) userData.mealPreferences = mealPreference;
      if (startDay) userData.weekStartDay = startDay;

      await setDoc(doc(db, "users", user.uid), userData);

      if (onboardingData) {
        await setDoc(doc(db, "users", user.uid, "onboarding_user_info", user.uid), onboardingData);
      }


      console.log("User created successfully!");
      return user;
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  },

  sendSignInEmail: async (email) => {
    const actionCodeSettings = {
      url: "https://ufo-weight.com/",
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      console.log("Ссылка для входа отправлена на email");
    } catch (error) {
      console.log(error.message);
    }
  },

  finishSignIn: async (onboardingData = {}, mealPreference = "", startDay = "") => {
    const email = window.localStorage.getItem("email");

    if (!email) {
      console.log("Email обязателен!");
      return;
    }

    try {
      const result = await signInWithEmailLink(auth, email, window.location.href);
      const user = result.user;

      console.log("Пользователь вошёл:", user.uid);

      await setDoc(doc(db, "users", user.uid), {
        userEmail: user.email,
        userId: user.uid,
        createdAt: new Date(),
        mealPreferences: mealPreference,
        weekStartDay: startDay,
        isOnboardingPassed: true,
      });

      if (onboardingData && Object.keys(onboardingData).length > 0) {
        await setDoc(doc(db, "users", user.uid, "onboarding_user_info", user.uid), onboardingData);
      }

      console.log("Данные пользователя добавлены в Firestore!");
      localStorage.removeItem("email");
      localStorage.removeItem("mealPreference");
      localStorage.removeItem("startDay");
      localStorage.removeItem("onboardingData");
    } catch (error) {
      console.error("Ошибка входа:", error);
      console.log(error.message);
    }
  },
}));
