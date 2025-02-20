import { useUserContext } from "@/state/UserContext";
import PropTypes from "prop-types";

export const GenderSelection = ({ onNext, onBack }) => {
  const { updateUserData } = useUserContext();
  const handleNext = (gender) => {
    updateUserData("gender", gender);
    onNext();
  };

  return (
    <div>
      <h2>What sex were you assigned at birth? ваш пол</h2>
      <button className='button-primary' onClick={() => handleNext("male")}>
        Male
      </button>
      <button className='button-primary' onClick={() => handleNext("female")}>
        Female
      </button>
      <br />
      <button className='button-secondary' onClick={onBack}>
        Назад
      </button>
    </div>
  );
};

GenderSelection.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
