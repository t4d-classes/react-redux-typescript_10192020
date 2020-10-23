import { Action, AnyAction, Dispatch } from 'redux';

import { Car, NewCar, CarKeys } from '../models/car';
import { CarsRestClient } from '../services/CarsRestClient';

const carsRestClient = new CarsRestClient('http://localhost:3060/cars');

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST_ACTION';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE_ACTION';
export const APPEND_CAR_REQUEST_ACTION = 'APPEND_REQUEST_CAR';
export const REPLACE_CAR_REQUEST_ACTION = 'REPLACE_REQUEST_CAR';
export const REMOVE_CAR_REQUEST_ACTION = 'REMOVE_REQUEST_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

// Refresh Cars Request Action

export interface RefreshCarsRequestCarAction
  extends Action<typeof REFRESH_CARS_REQUEST_ACTION> {}

export type CreateRefreshCarsRequestCarAction = () => RefreshCarsRequestCarAction;

export function isRefreshCarsRequestCarAction(
  action: AnyAction,
): action is RefreshCarsRequestCarAction {
  return action?.type === REFRESH_CARS_REQUEST_ACTION;
}

export const createRefreshCarsRequestCarAction: CreateRefreshCarsRequestCarAction = () => ({
  type: REFRESH_CARS_REQUEST_ACTION,
});

// Refresh Cars Done Action

export interface RefreshCarsDoneCarAction
  extends Action<typeof REFRESH_CARS_DONE_ACTION> {
  payload: {
    cars: Car[];
  };
}

export type CreateRefreshCarsDoneCarAction = (
  cars: Car[],
) => RefreshCarsDoneCarAction;

export function isRefreshCarsDoneCarAction(
  action: AnyAction,
): action is RefreshCarsDoneCarAction {
  return action?.type === REFRESH_CARS_DONE_ACTION;
}

export const createRefreshCarsDoneCarAction: CreateRefreshCarsDoneCarAction = (
  cars: Car[],
) => ({
  type: REFRESH_CARS_DONE_ACTION,
  payload: { cars },
});

// Refresh Cars Thunk Function

// thunk creator
export const refreshCars = () => {
  // thunk function
  return async (dispatch: Dispatch) => {
    dispatch(createRefreshCarsRequestCarAction());
    const cars = await carsRestClient.all();
    dispatch(createRefreshCarsDoneCarAction(cars));
  };
};

// Append Car Request Action

export interface AppendCarRequestAction
  extends Action<typeof APPEND_CAR_REQUEST_ACTION> {
  payload: { car: NewCar };
}

export type CreateAppendCarRequestAction = (
  car: NewCar,
) => AppendCarRequestAction;

export function isAppendCarRequestAction(
  action: AnyAction,
): action is AppendCarRequestAction {
  return action?.type === APPEND_CAR_REQUEST_ACTION;
}

export const createAppendCarRequestAction: CreateAppendCarRequestAction = (
  car,
) => ({
  type: APPEND_CAR_REQUEST_ACTION,
  payload: { car },
});

// End Append Car Request Action

// Append Car Thunk Function

export const appendCar = (car: NewCar) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(createAppendCarRequestAction(car));
    await carsRestClient.append(car);
    const refreshCarsThunk = refreshCars();
    refreshCarsThunk(dispatch);
    //dispatch(refreshCars());
  };
};

// Replace Car Request Action

export interface ReplaceCarRequestAction
  extends Action<typeof REPLACE_CAR_REQUEST_ACTION> {
  payload: { car: Car };
}

export type CreateReplaceCarRequestAction = (
  car: Car,
) => ReplaceCarRequestAction;

export function isReplaceCarRequestAction(
  action: AnyAction,
): action is ReplaceCarRequestAction {
  return action?.type === REPLACE_CAR_REQUEST_ACTION;
}

export const createReplaceCarRequestAction: CreateReplaceCarRequestAction = (
  car,
) => ({
  type: REPLACE_CAR_REQUEST_ACTION,
  payload: { car },
});

// End Replace Car Request Action

// Replace Car Thunk Function

export const replaceCar = (car: Car) => {
  return async (dispatch: Dispatch) => {
    dispatch(createReplaceCarRequestAction(car));
    await carsRestClient.replace(car);
    refreshCars()(dispatch);
  };
};

// Remove Car RequestAction

export interface RemoveCarRequestAction
  extends Action<typeof REMOVE_CAR_REQUEST_ACTION> {
  payload: { carId: number };
}

export type CreateRemoveCarRequestAction = (
  carId: number,
) => RemoveCarRequestAction;

export function isRemoveCarRequestAction(
  action: AnyAction,
): action is RemoveCarRequestAction {
  return action.type === REMOVE_CAR_REQUEST_ACTION;
}

export const createRemoveCarRequestAction: CreateRemoveCarRequestAction = (
  carId,
) => ({
  type: REMOVE_CAR_REQUEST_ACTION,
  payload: { carId },
});

// End Remove Car Request Action

// Remove Car Thunk Function

export const removeCar = (carId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(createRemoveCarRequestAction(carId));
    await carsRestClient.remove(carId);
    refreshCars()(dispatch);
  };
};

// Edit Car Action

export interface EditCarAction extends Action<typeof EDIT_CAR_ACTION> {
  payload: { carId: number };
}

export type CreateEditCarAction = (carId: number) => EditCarAction;

export function isEditCarAction(action: AnyAction): action is EditCarAction {
  return action.type === EDIT_CAR_ACTION;
}

export const createEditCarAction: CreateEditCarAction = (carId) => ({
  type: EDIT_CAR_ACTION,
  payload: { carId },
});

// End Edit Car Car

// Car Action

export type CancelCarAction = Action<typeof CANCEL_CAR_ACTION>;

export type CreateCancelCarAction = () => CancelCarAction;

export function isCancelCarAction(
  action: AnyAction,
): action is CancelCarAction {
  return action.type === CANCEL_CAR_ACTION;
}

export const createCancelCarAction: CreateCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});

// End Car Action

// Sort Cars Action

export interface SortCarsAction extends Action<typeof SORT_CARS_ACTION> {
  payload: { col: CarKeys };
}

export type CreateSortCarsAction = (col: CarKeys) => SortCarsAction;

export function isSortCarsAction(action: AnyAction): action is SortCarsAction {
  return action.type === SORT_CARS_ACTION;
}

export const createSortCarsAction: CreateSortCarsAction = (col: CarKeys) => ({
  type: SORT_CARS_ACTION,
  payload: { col },
});

// End Sort Cars Action
