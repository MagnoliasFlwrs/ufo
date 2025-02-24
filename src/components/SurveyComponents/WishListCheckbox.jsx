import { useUserContext } from "@/state/UserContext";
import { CheckboxList } from "./BaseSurveyCheckbox/CheckboxList";

export const WishListCheckbox = ({ onNext }) => {
  const { updateUserData } = useUserContext();

  const options = [
    "Guidance and support",
    "Increase self-awareness",
    "Get more knowledge",
    "Build healthy habits",
    "Stay motivated",
  ];

  return (
    <CheckboxList
      title='What would you like to obtain?'
      options={options}
      onNext={onNext}
      updateUserDataKey='wishlist'
      updateUserData={updateUserData}
    />
  );
};
