import { Reducer, combineReducers, AnyAction } from 'redux';

import { Car, CarToolAppState } from '../models/cars';

import {
  ADD_CAR_ACTION,
  SAVE_CAR_ACTION,
  DELETE_CAR_ACTION,
  EDIT_CAR_ACTION,
  CANCEL_CAR_ACTION,
} from '../actions/carToolActions';

export const editCarIdReducer: Reducer<number, AnyAction> = (
  editCarId = -1,
  action,
) => {
  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if (
    action.type === ADD_CAR_ACTION ||
    action.type === SAVE_CAR_ACTION ||
    action.type === DELETE_CAR_ACTION ||
    action.type === CANCEL_CAR_ACTION
  ) {
    return -1;
  }

  return editCarId;
};

const initialCars: Car[] = [
  {
    id: 1,
    make: 'Ford',
    model: 'Fusion Hybrid',
    year: 2020,
    color: 'blue',
    price: 45000,
  },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
];

export const carsReducer: Reducer<Car[], AnyAction> = (
  cars = initialCars,
  action,
) => {
  if (action.type === ADD_CAR_ACTION) {
    return [
      ...cars,
      {
        ...action.payload.car,
        id: Math.max(...cars.map((c) => c.id), 0) + 1,
      },
    ];
  }

  if (action.type === SAVE_CAR_ACTION) {
    const { car } = action.payload;
    const carIndex = cars.findIndex((c) => c.id === car.id);
    const newCars = [...cars];
    newCars[carIndex] = car;
    return newCars;
  }

  if (action.type === DELETE_CAR_ACTION) {
    return cars.filter((c) => c.id === action.payload.carId);
  }

  return cars;
};

export const carToolReducer: Reducer<
  CarToolAppState,
  AnyAction
> = combineReducers({
  editCarId: editCarIdReducer,
  cars: carsReducer,
});
