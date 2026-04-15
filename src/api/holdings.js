import data from "./holdingsData.json"; // paste your JSON here

export const getHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  });
};