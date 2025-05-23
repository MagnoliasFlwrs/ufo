import React, { useState, useEffect } from "react";
import { Banners, GoalBanner, ProgressBar, SurveyHeader } from "@/components";
import { getStepComponents } from "@/utils/stepComponents";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const GetStartedLayout = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [showGoalBanner, setShowGoalBanner] = useState(false);
  const [currentStepKey, setCurrentStepKey] = useState("");
  const stepComponents = getStepComponents();

  const { step, activeStep, activeSubStep, completedSteps, handleNext, handleBack, setActiveStep, setActiveSubStep } =
    useStepNavigation(stepComponents);

  const flatSteps = getStepComponents(handleNext).flat();
  const [animationParent] = useAutoAnimate();
  const [animationStep] = useAutoAnimate();

  // Отслеживаем текущий шаг
  useEffect(() => {
    const currentStep = flatSteps[step] || flatSteps[flatSteps.length - 1];
    setCurrentStepKey(currentStep.key);
  }, [step, flatSteps]);

  // Управление фокусом при закрытии баннера
  useEffect(() => {
    if (!isBannerVisible && currentStepKey === "ideal-weight") {
      const timer = setTimeout(() => {
        const input = document.querySelector("#ideal-weight-input input");
        if (input) {
          input.focus();
          input.setAttribute("inputmode", "decimal");
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isBannerVisible, currentStepKey]);

  const renderStep = () => {
    const currentStep = flatSteps[step] || flatSteps[flatSteps.length - 1];

    return React.cloneElement(currentStep.component, {
      key: currentStep.key,
      onNext: () => {
        if (step === flatSteps.length - 1) {
          setShowGoalBanner(true);
        } else {
          handleNext();
        }
      },
    });
  };

  return (
    <div ref={animationParent} className='container'>
      {showGoalBanner ? (
        <GoalBanner onNext={() => setShowGoalBanner(false)} />
      ) : (
        <>
          <Banners
            activeStep={activeStep}
            onBannerClose={() => setIsBannerVisible(false)}
            onBannerOpen={(isVisible) => setIsBannerVisible(isVisible)}
            className={isBannerVisible ? "visible" : "hidden"}
          />

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
        </>
      )}
    </div>
  );
};

export default GetStartedLayout;
