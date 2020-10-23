import { Reducer, combineReducers, AnyAction, Action } from 'redux';

import { Car, CarToolAppState } from '../models/cars';

import {
  ADD_CAR_ACTION,
  SAVE_CAR_ACTION,
  DELETE_CAR_ACTION,
  EDIT_CAR_ACTION,
  CANCEL_CAR_ACTION,
  REFRESH_CARS_DONE_ACTION,
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

export const carsReducer: Reducer<Car[], AnyAction> = (cars = [], action) => {
  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.payload.cars;
  }

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

export const isLoadingReducer: Reducer<boolean, Action<string>> = (
  isLoading = false,
  action,
) => {
  if (action.type.endsWith('_REQUEST')) {
    return true;
  }

  if (action.type.endsWith('_DONE')) {
    return false;
  }

  return isLoading;
};

export const carToolReducer: Reducer<
  CarToolAppState,
  AnyAction | Action<string>
> = combineReducers({
  isLoading: isLoadingReducer,
  editCarId: editCarIdReducer,
  cars: carsReducer,
});
