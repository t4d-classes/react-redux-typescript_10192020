import { Car, CarsOrder, ORDER_ASC } from '../models/car';
import { CarToolState } from '../models/carToolStore';

export const orderCars = (cars: Car[], carsOrder: CarsOrder) => {
  return cars.concat().sort((a: Car, b: Car) => {
    const left = String(a[carsOrder.column]).toUpperCase();
    const right = String(b[carsOrder.column]).toUpperCase();

    if (left < right) {
      return carsOrder.direction === ORDER_ASC ? -1 : 1;
    } else if (left > right) {
      return carsOrder.direction === ORDER_ASC ? 1 : -1;
    } else {
      return 0;
    }
  });
};

export const carsSelector = (state: CarToolState) =>
  orderCars(state.cars, state.carsOrder);
