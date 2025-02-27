import { useUserContext } from "@/state/UserContext";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const NonHungerTriggersChecklist = ({ onNext }) => {
  const { updateUserData } = useUserContext();

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
