import { Reducer, combineReducers, AnyAction, Action } from 'redux';

import { Car, CarsOrder, ORDER_ASC, ORDER_DESC } from '../models/car';
import { CarToolState } from '../models/carToolStore';

import {
  isSortCarsAction,
  isEditCarAction,
  isCancelCarAction,
  isRefreshCarsRequestCarAction,
  isRefreshCarsDoneCarAction,
} from '../actions/carToolActions';

export const carsOrderReducer: Reducer<CarsOrder, AnyAction> = (
  carsOrder = { column: 'id', direction: ORDER_ASC },
  action,
) => {
  if (isSortCarsAction(action)) {
    if (action.payload.col === carsOrder.column) {
      return {
        ...carsOrder,
        direction: carsOrder.direction === ORDER_ASC ? ORDER_DESC : ORDER_ASC,
      };
    } else {
      return {
        column: action.payload.col,
        direction: ORDER_ASC,
      };
    }
  }

  return carsOrder;
};

export const editCarIdReducer: Reducer<number, AnyAction> = (
  editCarId = -1,
  action,
) => {
  if (isEditCarAction(action)) {
    return action.payload.carId;
  }

  if (isRefreshCarsRequestCarAction(action) || isCancelCarAction(action)) {
    return -1;
  }

  return editCarId;
};

export const carsReducer: Reducer<Car[], AnyAction> = (cars = [], action) => {
  if (isRefreshCarsDoneCarAction(action)) {
    return action.payload.cars;
  }

  return cars;
};

export const isLoadingReducer: Reducer<boolean, Action<string>> = (
  isLoading = false,
  action,
) => {
  if (action.type.includes('REQUEST')) {
    return true;
  }

  if (action.type.includes('DONE')) {
    return false;
  }

  return isLoading;
};

export const carToolReducer: Reducer<CarToolState, AnyAction> = combineReducers(
  {
    carsOrder: carsOrderReducer,
    editCarId: editCarIdReducer,
    cars: carsReducer,
    isLoading: isLoadingReducer,
  },
);
