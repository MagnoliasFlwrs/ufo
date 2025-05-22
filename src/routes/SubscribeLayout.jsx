import React, { useMemo, useState } from "react";
import { EmailInput } from "@/components/Paddle/EmailInput";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { SubscribeBanner } from "@/components/Paddle/SubscribeBanner";

const SubscribeLayout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationParent] = useAutoAnimate();

  const steps = useMemo(
    () => [
      { component: <EmailInput />, key: "step-email-input" },
      { component: <SubscribeBanner />, key: "step-subscribe-banner" },
    ],
    [],
  );

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    const step = steps[currentStep];
    return React.cloneElement(step.component, {
      key: step.key,
      onNext: handleNext,
      onBack: currentStep > 0 ? handleBack : undefined,
    });
  };

  return (
    <div ref={animationParent} className='container'>
      {renderCurrentStep()}
    </div>
  );
};

export default SubscribeLayout;
