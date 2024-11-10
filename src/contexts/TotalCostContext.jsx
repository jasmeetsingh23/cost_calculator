import React, { createContext, useContext, useState } from "react";

// Create the context
const TotalCostContext = createContext();

export const useTotalCost = () => {
  return useContext(TotalCostContext);
};

export const TotalCostProvider = ({ children }) => {
  // Initialize the total costs, including placeholders for all cost categories
  const [totalCosts, setTotalCosts] = useState({
    materialCost: 0,
    transportationCost: 0,
    furnitureCost: 0,
    flooringCost: 0,
    lightingAndElectricianCost: 0, // Added lighting and electrician cost
    labourCost: 0, // Initial labor cost as 0
  });

  const updateTotal = (key, value) => {
    setTotalCosts((prevCosts) => ({
      ...prevCosts,
      [key]: value,
    }));
  };

  return (
    <TotalCostContext.Provider value={{ totalCosts, updateTotal }}>
      {children}
    </TotalCostContext.Provider>
  );
};
