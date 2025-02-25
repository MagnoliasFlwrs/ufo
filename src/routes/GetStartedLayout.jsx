import React from "react";
import UserContext from "@/state/UserContext";
import { ProgressBar, SurveyHeader } from "@/components";
import { getStepComponents } from "@/utils/stepComponents";
import { useUserData } from "@/hooks/useUserData";
import { useStepNavigation } from "@/hooks/useStepNavigation";

const GetStartedLayout = () => {
  const { userData, updateUserData } = useUserData();
  const stepComponents = getStepComponents();
  const { step, activeStep, activeSubStep, completedSteps, handleNext, handleBack, setActiveStep, setActiveSubStep } =
    useStepNavigation(stepComponents);

  const flatSteps = getStepComponents(handleNext).flat();

  console.log(userData);

  const renderStep = () => {
    const currentStep = flatSteps[step] || flatSteps[flatSteps.length - 1];
    return React.cloneElement(currentStep.component, { key: currentStep.key });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
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
