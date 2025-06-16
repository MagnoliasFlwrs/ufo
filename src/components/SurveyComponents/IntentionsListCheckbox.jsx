import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const IntentionsListCheckbox = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    { label: "Improve physical appearance", key: "improve" },
    { label: "Become healthier", key: "health" },
    { label: "Sleep better", key: "sleep" },
    { label: "Feel happier", key: "feel" },
    { label: "Other", key: "other" },
  ];

  return (
    <CheckboxList
      title='What are your intentions?'
      options={options}
      onNext={onNext}
      updateUserDataKey='listOfIntentions'
      updateUserData={updateUserData}
      className='bottom-block'
    />
  );
};
