import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";
import { useUserStore } from "@/store/store";

export const DietingHistoryChecklist = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    { label: "Keto", key: "keto" },
    { label: "Calorie-deficit diets", key: "deficit" },
    { label: "Intermittent fasting", key: "fasting" },
    { label: "Low carb diet", key: "lowCarbs" },
  ];

  const buttonOption = {
    label: "No, never",
    key: "dont",
  };

  return (
    <CheckboxList
      title='Have you ever tried restrictive weight loss methods?'
      buttonText={buttonOption}
      options={options}
      onNext={onNext}
      updateUserDataKey='dietingHistory'
      updateUserData={updateUserData}
      className='bottom-block'
    />
  );
};
