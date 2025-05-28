export const convertWeight = (weightInKg, measurementSystem) => {
  return measurementSystem === "imperial" ? Math.floor(weightInKg * 2.20462 * 10) / 10 : weightInKg;
};

export const getDisplayWeight = (weightInKg, measurementSystem) => {
  const converted = convertWeight(weightInKg, measurementSystem);
  return measurementSystem === "imperial" ? `${converted.toFixed(1)} lbs` : `${weightInKg} kg`;
};

export const calculateGoalDate = (currentWeight, idealWeight) => {
  const weightDifference = Math.abs(currentWeight - idealWeight);
  const weeksNeeded = weightDifference === 0 ? 0 : weightDifference / 0.5;
  const currentUnix = Math.floor(Date.now() / 1000);
  const goalUnix = currentUnix + weeksNeeded * 7 * 24 * 60 * 60;
  return new Date(goalUnix * 1000);
};

export const isSmallWeightDifference = (currentWeight, idealWeight) => {
  return Math.abs(currentWeight - idealWeight) <= 3;
};
