import { useUserContext } from "@/state/UserContext";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const DietingHistoryChecklist = ({ onNext }) => {
  const { updateUserData } = useUserContext();

  const options = ["Keto", "Calorie-deficit diets", "Intermittent fasting", "Low carb diet"];

  return (
    <CheckboxList
      title='Have you ever tried restrictive weight loss methods?'
      buttonText='No, never'
      options={options}
      onNext={onNext}
      updateUserDataKey='dietingHistory'
      updateUserData={updateUserData}
    />
  );
};
