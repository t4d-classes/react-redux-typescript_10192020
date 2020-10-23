import { Reducer, combineReducers, AnyAction, Action } from 'redux';

import { Car, CarToolAppState } from '../models/cars';

import {
  EDIT_CAR_ACTION,
  CANCEL_CAR_ACTION,
  REFRESH_CARS_DONE_ACTION,
  EditCarAction,
  RefreshCarsDoneAction,
  CancelCarAction,
} from '../actions/carToolActions';

export type CarToolActions =
  | EditCarAction
  | RefreshCarsDoneAction
  | CancelCarAction;

export const editCarIdReducer: Reducer<number, CarToolActions> = (
  editCarId = -1,
  action,
) => {
  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if (
    action.type === REFRESH_CARS_DONE_ACTION ||
    action.type === CANCEL_CAR_ACTION
  ) {
    return -1;
  }

  return editCarId;
};

export const carsReducer: Reducer<Car[], CarToolActions> = (
  cars = [],
  action,
) => {
  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.payload.cars;
  }

  return cars;
};

export const isLoadingReducer: Reducer<boolean, CarToolActions> = (
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
  CarToolActions
> = combineReducers({
  isLoading: isLoadingReducer,
  editCarId: editCarIdReducer,
  cars: carsReducer,
});
