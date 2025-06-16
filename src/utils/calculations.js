export const calculateCalories = (state) => {
  if (!state.gender || !state.age || !state.height || !state.weight || !state.weeklyActivities) {
    return null;
  }

  const weight = parseFloat(state.weight.toString());
  const idealWeight = parseFloat(state.idealWeight?.toString() || state.weight.toString());
  const height = parseFloat(state.height.toString());
  const age = parseInt(state.age.toString());

  // Basal metabolic rate (BMR)
  let bmr;
  if (state.gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  // Activity coefficients
  const activityFactors = {
    sedentary: 1.2,
    lightly_active: 1.3,
    moderately_active: 1.5,
    very_active: 1.7,
  };

  // Goal factor
  let goalFactor = 0;

  if (weight > idealWeight) {
    goalFactor = 0.8;
  } else {
    goalFactor = 1;
  }

  const activityFactor = activityFactors[state.weeklyActivities] || 1.2;

  return Math.round(bmr * activityFactor * goalFactor);
};
