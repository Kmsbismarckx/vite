export const mapArrToString = (arr: any[]) => {
  return arr.filter(item => Number.isInteger(item)).map(String);
};
