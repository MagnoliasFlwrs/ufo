import React from "react";
import UserContext from "@/state/UserContext";
import { Banners, ProgressBar, SurveyHeader } from "@/components";
import { getStepComponents } from "@/utils/stepComponents";
import { useUserData } from "@/hooks/useUserData";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const GetStartedLayout = () => {
  const [isBannerVisible, setIsBannerVisible] = React.useState(false);
  const { userData, updateUserData } = useUserData();
  const stepComponents = getStepComponents();

  const { step, activeStep, activeSubStep, completedSteps, handleNext, handleBack, setActiveStep, setActiveSubStep } =
    useStepNavigation(stepComponents);

  const flatSteps = getStepComponents(handleNext).flat();
  const [animationParent] = useAutoAnimate();
  const [animationStep] = useAutoAnimate();

  const renderStep = () => {
    const currentStep = flatSteps[step] || flatSteps[flatSteps.length - 1];
    return React.cloneElement(currentStep.component, { key: currentStep.key });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <div ref={animationParent} className='container'>
        {/* Banners */}
        <Banners
          activeStep={activeStep}
          onBannerClose={() => setIsBannerVisible(false)}
          onBannerOpen={(isVisible) => setIsBannerVisible(isVisible)}
          className={isBannerVisible ? "visible" : "hidden"}
        />

        {/* SurveyHeader и ProgressBar */}
        <div
          className={isBannerVisible ? "hidden" : "visible"}
          style={isBannerVisible ? { top: "20px" } : { top: "0px" }}>
          <SurveyHeader indexTitle={activeStep} indexSubTitle={activeSubStep} onBack={handleBack} />

          <div style={{ marginBottom: "24px" }}>
            <ProgressBar
              stepComponents={stepComponents}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              activeSubStep={activeSubStep}
              setActiveSubStep={setActiveSubStep}
              completedSteps={completedSteps}
            />
          </div>

          <div ref={animationStep} className={isBannerVisible ? "hidden" : "visible"}>
            {renderStep()}
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default GetStartedLayout;
