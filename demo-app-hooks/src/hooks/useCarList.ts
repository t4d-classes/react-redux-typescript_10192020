import { useState } from "react";

import { Car, NewCar } from "../models/car";

type UseCarList = (
  initialCars: Car[]
) => [
  Car[],
  (carForm: NewCar) => void,
  (car: Car) => void,
  (carId: number) => void
];

export const useCarList: UseCarList = (initialCars: Car[]) => {
  const [cars, setCars] = useState([...initialCars]);

  const addCar = (carForm: NewCar) => {
    setCars([
      ...cars,
      {
        ...carForm,
        id: Math.max(...cars.map((c) => c.id), 0) + 1,
      },
    ]);
  };

  const saveCar = (car: Car) => {
    const carIndex = cars.findIndex((c) => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter((c) => c.id !== carId));
  };

  return [cars, addCar, saveCar, deleteCar];
};
