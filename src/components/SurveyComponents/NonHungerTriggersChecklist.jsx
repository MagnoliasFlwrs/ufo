import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const NonHungerTriggersChecklist = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    { label: "Anxiety", key: "anxiety" },
    { label: "Boredom", key: "boredom" },
    { label: "Loneliness", key: "loneliness" },
    { label: "Stress", key: "stress" },
    { label: "Frustration", key: "frustration" },
    { label: "It is more like a habit", key: "habbit" },
  ];

  const buttonOption = {
    label: "I don't eat if not hungry",
    key: "dont",
  };

  return (
    <CheckboxList
      title='What makes you eat when you are not hungry?'
      buttonText={buttonOption}
      options={options}
      onNext={onNext}
      updateUserDataKey='nonHungerTriggers'
      updateUserData={updateUserData}
      className='bottom-block margin-top'
    />
  );
};
