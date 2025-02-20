import { useUserContext } from "@/state/UserContext";
import PropTypes from "prop-types";

export const MeasurementSystem = ({ onNext, onBack }) => {
  const { updateUserData } = useUserContext();

  const handleNext = (system) => {
    updateUserData("measurementSystem", system);
    onNext();
  };

  return (
    <div>
      <h2>What measurement units do you prefer?</h2>
      <button className='button-primary' onClick={() => handleNext("metric")}>
        Metric (m, kg)
      </button>
      <button className='button-primary' onClick={() => handleNext("imperial")}>
        Imperial (ft, lb)
      </button>
      <br />

      <button className='button-secondary' onClick={onBack}>
        Back
      </button>
    </div>
  );
};

MeasurementSystem.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
