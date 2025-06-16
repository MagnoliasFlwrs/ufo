import { useState } from "react";

export const useSurveyCheckboxSelection = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (optionKey) => {
    setSelectedOptions((prev) =>
      prev.includes(optionKey) ? prev.filter((item) => item !== optionKey) : [...prev, optionKey],
    );
  };

  return {
    selectedOptions, // Всегда массив ключей
    handleCheckboxChange,
    setSelectedOptions,
  };
};
