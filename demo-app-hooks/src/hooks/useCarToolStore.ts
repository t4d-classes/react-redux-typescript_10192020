import { useState } from 'react';

import {
  Car,
  NewCar,
  CarKeys,
  CarsOrder,
  ORDER_ASC,
  ORDER_DESC,
} from '../models/car';
import { CarToolStore } from '../models/carToolStore';
import { useList } from '../hooks/useList';
import { orderCars } from '../selectors/carToolSelectors';

type UseCarToolStore = (initialCars: Car[]) => CarToolStore;

// Store - contains both the state data and stateful logic for updating the data
export const useCarToolStore: UseCarToolStore = (initialCars) => {
  // Application State - Data
  const [carsOrder, setCarsOrder] = useState<CarsOrder>({
    column: 'id',
    direction: ORDER_ASC,
  });
  const [editCarId, setEditCarId] = useState(-1);
  const [cars, appendCar, replaceCar, removeCar] = useList<Car>([
    ...initialCars,
  ]);

  // Application Stateful Logic - Functions/Logic
  const addCar = (carForm: NewCar) => {
    appendCar(carForm);
    hideEditRow();
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    hideEditRow();
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    hideEditRow();
  };

  const hideEditRow = () => {
    setEditCarId(-1);
  };

  const sortCars = (column: CarKeys) => {
    setCarsOrder({
      column,
      direction:
        column !== carsOrder.column
          ? ORDER_ASC
          : carsOrder.direction === ORDER_DESC
          ? ORDER_ASC
          : ORDER_DESC,
    });
  };

  return {
    cars: orderCars(cars, carsOrder),
    editCarId,
    carsOrder,
    isLoading: false,
    addCar,
    saveCar,
    deleteCar,
    editCar: setEditCarId,
    cancelCar: hideEditRow,
    sortCars,
  };
};
