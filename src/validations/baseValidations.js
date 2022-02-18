export const emptyField = (value) => {
  if (!value) return true;
  return false;
};

export const lessValue = (value, min) => {
  if (value < min) return true;
  return false;
};

export const higherValue = (value, max) => {
  if (value > max) return true;
  return false;
};
