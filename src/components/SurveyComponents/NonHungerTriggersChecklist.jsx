import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const NonHungerTriggersChecklist = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = ["Anxiety", "Boredom", "Loneliness", "Stress", "Frustration", "It is more like a habit"];

  return (
    <CheckboxList
      title='What makes you eat when you are not hungry?'
      buttonText="I don't eat if not hungry"
      options={options}
      onNext={onNext}
      updateUserDataKey='nonHungerTriggers'
      updateUserData={updateUserData}
    />
  );
};
