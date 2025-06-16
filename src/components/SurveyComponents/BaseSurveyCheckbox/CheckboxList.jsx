import { Typography, Box, Button } from "@mui/material";
import { useSurveyCheckboxSelection } from "@/hooks/useSurveyCheckboxSelection";
import { CustomCheckbox } from "./CustomCheckbox";

export const CheckboxList = ({
  title,
  subtitle = "",
  buttonText = null, // Может быть { label: string, key: string } или string
  options, // Массив строк или объектов { label: string, key: string }
  onNext,
  updateUserDataKey,
  updateUserData,
  className = "",
}) => {
  const { selectedOptions, handleCheckboxChange } = useSurveyCheckboxSelection();

  // Нормализуем options к единому формату
  const normalizedOptions = options.map((option) =>
    typeof option === "string" ? { label: option, key: option } : option,
  );

  // Нормализуем buttonText
  const normalizedButtonText = typeof buttonText === "string" ? { label: buttonText, key: buttonText } : buttonText;

  const handleNextWithSelection = () => {
    if (updateUserData && updateUserDataKey) {
      // Всегда сохраняем массив, даже с одним элементом
      updateUserData(updateUserDataKey, selectedOptions);
    }
    onNext();
  };

  const handleNextWithButton = () => {
    if (updateUserData && updateUserDataKey && normalizedButtonText) {
      // Для кнопки тоже сохраняем массив с одним элементом-ключом
      updateUserData(updateUserDataKey, [normalizedButtonText.key]);
    }
    onNext();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (selectedOptions.length > 0) {
        handleNextWithSelection();
      } else if (normalizedButtonText) {
        handleNextWithButton();
      }
    }
  };

  return (
    <div className={"content"} onKeyDown={handleKeyDown} tabIndex={0}>
      <div>
        <Typography variant='h6' align='left' sx={{ color: "primary.main", fontWeight: 450 }}>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant='h6' align='left' className='survey-subtitle'>
            {subtitle}
          </Typography>
        )}

        <Box sx={{ mt: 2 }}>
          {normalizedOptions.map((option) => (
            <CustomCheckbox
              key={option.key}
              option={option.label}
              isChecked={selectedOptions.includes(option.key)}
              onChange={() => handleCheckboxChange(option.key)}
            />
          ))}
        </Box>
      </div>

      <div className={className}>
        {selectedOptions.length > 0 ? (
          <Button variant='contained' fullWidth onClick={handleNextWithSelection} className='survey-next-button'>
            Next
          </Button>
        ) : (
          normalizedButtonText && (
            <Button variant='contained' fullWidth onClick={handleNextWithButton} className='secondary-button'>
              {normalizedButtonText.label}
            </Button>
          )
        )}
      </div>
    </div>
  );
};
