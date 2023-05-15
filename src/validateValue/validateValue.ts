export const validateValue = (value: number) => {
  return !(value < 0 || value > 100);
};
