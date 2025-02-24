import React, { useState } from "react";
import UserContext from "@/state/UserContext";
import { ProgressBar, SurveyHeader } from "@/components";
import { getStepComponents } from "@/utils/stepComponents";

const GetStartedLayout = () => {
  const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubStep, setActiveSubStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});

  //===================================================================================
  // context for collecting user data
  const [userData, setUserData] = useState({
    measurementSystem: "metric",
    age: "",
    gender: "",
    height: "",
    weight: "",
    idealWeight: "",
    wishlist: [],
    listOfInterests: [],
  });

  console.log(userData);
  //===================================================================================
  //===================================================================================

  const handleNext = () => {
    setStep((prev) => prev + 1);

    const currentStep = stepComponents[activeStep];
    if (activeSubStep < currentStep.length - 1) {
      setActiveSubStep((prev) => prev + 1);
    } else {
      setCompletedSteps((prev) => ({ ...prev, [activeStep]: true }));
      if (activeStep < stepComponents.length - 1) {
        setActiveStep((prev) => prev + 1);
        setActiveSubStep(0);
      }
    }
  };

  const handleBack = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : 0));

    if (activeSubStep > 0) {
      setActiveSubStep((prev) => prev - 1);
      setCompletedSteps((prev) => ({ ...prev, [activeStep]: false }));
    } else if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      setActiveSubStep(stepComponents[activeStep - 1].length - 1);
      setCompletedSteps((prev) => ({ ...prev, [activeStep - 1]: false }));
    }
  };

  const handleUpdateUserData = (key, value) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  const stepComponents = getStepComponents(handleNext);
  const flatSteps = stepComponents.flat();

  const renderStep = () => {
    const currentStep = flatSteps[step] || flatSteps[flatSteps.length - 1];
    return React.cloneElement(currentStep.component, { key: currentStep.key });
  };

  //===================================================================================
  //===================================================================================

  return (
    <UserContext.Provider value={{ userData, updateUserData: handleUpdateUserData }}>
      <div className='container'>
        <SurveyHeader indexTitle={activeStep} onBack={handleBack} />

        <ProgressBar
          stepComponents={stepComponents}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          activeSubStep={activeSubStep}
          setActiveSubStep={setActiveSubStep}
          completedSteps={completedSteps}
        />
        <br />

        {renderStep()}
      </div>
    </UserContext.Provider>
  );
};

export default GetStartedLayout;
