import {
  MeasurementSystem,
  AgeInput,
  GenderSelection,
  HeightInput,
  WeightInput,
  IdealWeight,
  WishListCheckbox,
  IntentionsListCheckbox,
  InspiringEventCheckbox,
  FastFoodConsumptionFrequency,
  NonHungerTriggersChecklist,
  DietingHistoryChecklist,
  WeightLossSuccessSelector,
  MealPreferencesSelector,
  WeekStartDaySelector,
  PreferredMealSchedule,
} from "@/components";

export const getStepComponents = (handleNext) => [
  // Demographic profile
  [
    { component: <MeasurementSystem onNext={handleNext} />, key: "measurement" },
    { component: <AgeInput onNext={handleNext} />, key: "age" },
    { component: <GenderSelection onNext={handleNext} />, key: "gender" },
    { component: <HeightInput onNext={handleNext} />, key: "height" },
    { component: <WeightInput onNext={handleNext} />, key: "weight" },
  ],

  // Goal setting
  [
    { component: <IdealWeight onNext={handleNext} />, key: "ideal-weight" },
    { component: <WishListCheckbox onNext={handleNext} />, key: "wishlist" },
    { component: <IntentionsListCheckbox onNext={handleNext} />, key: "intentions" },
    { component: <InspiringEventCheckbox onNext={handleNext} />, key: "inspiring-events" },
  ],

  // Experience
  [
    { component: <FastFoodConsumptionFrequency onNext={handleNext} />, key: " fast-food" },
    { component: <NonHungerTriggersChecklist onNext={handleNext} />, key: "non-hunger-triggers" },
    { component: <DietingHistoryChecklist onNext={handleNext} />, key: "dieting-history" },
    { component: <WeightLossSuccessSelector onNext={handleNext} />, key: "weight-loss" },
  ],

  // Preferences
  [
    { component: <MealPreferencesSelector onNext={handleNext} />, key: "meal-preferences" },
    { component: <WeekStartDaySelector onNext={handleNext} />, key: "start-day" },
    { component: <PreferredMealSchedule onNext={handleNext} />, key: "meal-schedule" },
  ],

  // Health info
  [
    { component: <div>TEST</div>, key: "done" },
    { component: <div>All done!</div>, key: "done" },
  ],
];
