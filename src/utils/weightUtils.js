export const convertWeight = (weightInKg, measurementSystem) => {
  return measurementSystem === "imperial" ? Math.floor(weightInKg * 2.20462 * 10) / 10 : weightInKg;
};

export const getDisplayWeight = (weightInKg, measurementSystem) => {
  const converted = convertWeight(weightInKg, measurementSystem);
  return measurementSystem === "imperial" ? `${converted.toFixed(1)} lbs` : `${weightInKg} kg`;
};

export const calculateGoalDate = (currentWeight, idealWeight) => {
  let lostWeightPerWeek;

  if (currentWeight >= 90) {
    lostWeightPerWeek = 1; // ≥90 кг → 1 кг/неделю
  } else if (currentWeight > 65) {
    lostWeightPerWeek = 0.7; // 65 < вес < 90 → 0.7 кг/неделю
  } else {
    lostWeightPerWeek = 0.5; // ≤65 кг → 0.5 кг/неделю
  }

  const SECONDS_IN_WEEK = 7 * 24 * 60 * 60;
  const weightDifference = Math.abs(currentWeight - idealWeight);
  const weeksNeeded = weightDifference === 0 ? 0 : weightDifference / lostWeightPerWeek;

  return new Date((Math.floor(Date.now() / 1000) + weeksNeeded * SECONDS_IN_WEEK) * 1000);
};

export const isSmallWeightDifference = (currentWeight, idealWeight) => {
  return Math.abs(currentWeight - idealWeight) <= 3;
};
