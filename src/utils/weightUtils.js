export const convertWeight = (weightInKg, measurementSystem) => {
  return measurementSystem === "imperial" ? Math.floor(weightInKg * 2.20462 * 10) / 10 : weightInKg;
};

export const getDisplayWeight = (weightInKg, measurementSystem) => {
  const converted = convertWeight(weightInKg, measurementSystem);
  return measurementSystem === "imperial" ? `${converted.toFixed(1)} lbs` : `${weightInKg} kg`;
};

export const calculateGoalDate = (currentWeight, idealWeight) => {
  const lostWeightPerWeek = currentWeight >= 90 ? 1 : 0.7;
  const SECONDS_IN_WEEK = 7 * 24 * 60 * 60;

  const weightDifference = Math.abs(currentWeight - idealWeight);
  const weeksNeeded = weightDifference === 0 ? 0 : weightDifference / lostWeightPerWeek;

  return new Date((Math.floor(Date.now() / 1000) + weeksNeeded * SECONDS_IN_WEEK) * 1000);
};

export const isSmallWeightDifference = (currentWeight, idealWeight) => {
  return Math.abs(currentWeight - idealWeight) <= 3;
};
