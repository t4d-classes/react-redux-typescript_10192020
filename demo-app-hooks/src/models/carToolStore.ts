import { Car, NewCar, CarsOrder } from './car';

export type CarToolState = {
  cars: Car[];
  editCarId: number;
  carsOrder: CarsOrder;
  isLoading: boolean;
};

export type CarToolActions = {
  addCar: (carForm: NewCar) => void;
  saveCar: (car: Car) => void;
  deleteCar: (carId: number) => void;
  editCar: (carId: number) => void;
  cancelCar: () => void;
  sortCars: (col: keyof Car) => void;
};

export type CarToolStore = CarToolState & CarToolActions;
