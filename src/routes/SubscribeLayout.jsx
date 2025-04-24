import React, { useState } from "react";
import { EmailInput } from "@/components/Paddle/EmailInput";
import { PaddleCheckout } from "@/components/Paddle/PaddleCheckout";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Schedule } from "@/components/Paddle/Schedule";

const SubscribeLayout = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [animationParent] = useAutoAnimate();

  // Шаги процесса
  const steps = [
    {
      component: <EmailInput />,
      key: "email-input",
    },
    {
      component: <Schedule />,
      key: "schedule",
    },

    {
      component: <PaddleCheckout />,
      key: "paddle-checkout",
    },
  ];

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
