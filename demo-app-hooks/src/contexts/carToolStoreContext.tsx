import React, { FC, createContext, useContext } from "react";

import { useCarToolStore } from "../hooks/useCarToolStore";
import { Car } from "../models/car";
import { CarToolStore } from "../models/carToolStore";

const carList: Car[] = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2020,
    color: "blue",
    price: 45000,
  },
  { id: 2, make: "Tesla", model: "S", year: 2019, color: "red", price: 120000 },
];

const carToolStoreContext = createContext({} as CarToolStore);

export const CarToolStoreProvider: FC = ({ children }) => {
  return (
    <carToolStoreContext.Provider value={useCarToolStore(carList)}>
      {children}
    </carToolStoreContext.Provider>
  );
};

export const useCarToolStoreConsumer = () => {
  // useDispatch
  // useSelector
  return useContext(carToolStoreContext);
};
