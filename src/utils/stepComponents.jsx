// stepComponents.js
import { MeasurementSystem, AgeInput, GenderSelection, HeightInput, WeightInput } from "@/components";

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
    { component: <div>TEST</div>, key: "done" },
    { component: <div>TEST</div>, key: "done" },
    { component: <div>TEST</div>, key: "done" },
    { component: <div>TEST</div>, key: "done" },
  ],

  // Experience
  [
    { component: <div>TEST</div>, key: "done" },
    { component: <div>TEST</div>, key: "done" },
    { component: <div>TEST</div>, key: "done" },
  ],

  // Preferences
  [
    { component: <div>TEST</div>, key: "done" },
    { component: <div>TEST</div>, key: "done" },
    { component: <div>TEST</div>, key: "done" },
  ],

  // Health info
  [
    { component: <div>TEST</div>, key: "done" },
    { component: <div>All done!</div>, key: "done" },
  ],
];
