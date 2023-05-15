export const delay = (callback: () => number, ms: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
};
