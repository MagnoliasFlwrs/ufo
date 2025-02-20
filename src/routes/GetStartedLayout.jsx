import { useState } from "react";
import UserContext from "@/state/UserContext";

import { AgeInput, GenderSelection, MeasurementSystem } from "@components";

const GetStartedLayout = () => {
  const [step, setStep] = useState(0);

  const [userData, setUserData] = useState({
    measurementSystem: "",
    age: "",
    gender: "",
  });

  console.log(userData);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleUpdateUserData = (key, value) => {
    setUserData((prev) => {
      const newData = { ...prev, [key]: value };
      return newData;
    });
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <MeasurementSystem onNext={handleNext} onBack={handleBack} />;
      case 1:
        return <AgeInput onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <GenderSelection onNext={handleNext} onBack={handleBack} />;
      default:
        return <div>All done!</div>;
    }
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData: handleUpdateUserData }}>
      <div className='container'>
        <h1>Get started</h1>
        {renderStep()}
      </div>
    </UserContext.Provider>
  );
};

export default GetStartedLayout;
