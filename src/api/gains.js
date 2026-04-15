const gainsData = {
    capitalGains: {
      stcg: { profits: 70200.88, losses: 1548.53 },
      ltcg: { profits: 5020, losses: 3050 },
    },
  };
  
  export const getCapitalGains = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(gainsData), 500);
    });
  };