import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const HealtConditionsCheckbox = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    { label: "Heart disease or stroke", key: "heart" },
    { label: "Mental health disorder", key: "mental" },
    { label: "High blood pressure", key: "blood" },
    { label: "High cholesterol", key: "cholesterol" },
    { label: "Diabetes", key: "diabetes" },
    { label: "Food allergy or Intolerance", key: "allergy" },
  ];

  const buttonOption = {
    label: "No risks diagnosed",
    key: "dont",
  };

  return (
    <CheckboxList
      title='Have you been diagnosed with any of the following health conditions?'
      subtitle='We ask for this information to guarantee a safe and seamless experience.'
      buttonText={buttonOption}
      options={options}
      onNext={onNext}
      updateUserDataKey='healthConditions'
      updateUserData={updateUserData}
      className='bottom-block margin-top'
    />
  );
};
