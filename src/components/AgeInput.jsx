import { useState } from "react";
import { useUserContext } from "@/state/UserContext";
import PropTypes from "prop-types";

export const AgeInput = ({ onNext, onBack }) => {
  const [age, setAge] = useState("");
  const { updateUserData } = useUserContext();

  const handleNext = () => {
    if (age) {
      updateUserData("age", age);
      onNext();
    } else {
      alert("Please enter your age.");
    }
  };

  return (
    <div>
      <h2>How old are you?</h2>
      <input
        className='input-field'
        type='number'
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder='Enter your age'
      />
      <button className='button-primary' onClick={handleNext}>
        Next
      </button>
      <button className='button-secondary' onClick={onBack}>
        Back
      </button>
    </div>
  );
};

AgeInput.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
