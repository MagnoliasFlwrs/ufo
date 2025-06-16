import { useUserStore } from "@/store/store";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const WishListCheckbox = ({ onNext }) => {
  const updateUserData = useUserStore((state) => state.updateUserData);

  const options = [
    { label: "Guidance and support", key: "guidance" },
    { label: "Increase self-awareness", key: "awareness" },
    { label: "Get more knowledge", key: "knowledge" },
    { label: "Build healthy habits", key: "habits" },
    { label: "Stay motivated", key: "motivated" },
  ];

  return (
    <CheckboxList
      title='What would you like to obtain?'
      options={options}
      onNext={onNext}
      updateUserDataKey='wishlist'
      updateUserData={updateUserData}
      className='bottom-block'
    />
  );
};
