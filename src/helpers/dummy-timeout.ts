export const dummyTimeout = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
