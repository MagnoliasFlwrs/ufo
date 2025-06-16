import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const InspiringEventCheckbox = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    { label: "Vacation", key: "vacation" },
    { label: "Wedding", key: "wedding" },
    { label: "Sports competition", key: "sports" },
    { label: "Summer", key: "summer" },
    { label: "Birthday", key: "birthday" },
  ];

  const buttonOption = {
    label: "No, I don't have an event",
    key: "dont",
  };

  return (
    <CheckboxList
      title="Do you have an event that's inspiring you to change?"
      subtitle='Having something to look forward to can help you stay on track.'
      buttonText={buttonOption}
      options={options}
      onNext={onNext}
      updateUserDataKey='inspiringEvents'
      updateUserData={updateUserData}
      className='bottom-block margin-top'
    />
  );
};
