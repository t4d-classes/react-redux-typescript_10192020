import { Action, Dispatch } from 'redux';

import { Car, NewCar } from '../models/cars';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const ADD_CAR_REQUEST_ACTION = 'ADD_CAR_REQUEST';
export const SAVE_CAR_REQUEST_ACTION = 'SAVE_CAR_REQUEST';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST';

export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export interface RefreshCarsRequestAction
  extends Action<typeof REFRESH_CARS_REQUEST_ACTION> {}

export type CreateRefreshCarsRequestAction = () => RefreshCarsRequestAction;

export const createRefreshCarsRequestAction: CreateRefreshCarsRequestAction = () => ({
  type: REFRESH_CARS_REQUEST_ACTION,
});

export interface RefreshCarsDoneAction
  extends Action<typeof REFRESH_CARS_DONE_ACTION> {
  payload: { cars: Car[] };
}

export type CreateRefreshCarsDoneAction = (
  cars: Car[],
) => RefreshCarsDoneAction;

export const createRefreshCarsDoneAction: CreateRefreshCarsDoneAction = (
  cars,
) => ({
  type: REFRESH_CARS_DONE_ACTION,
  payload: { cars },
});

export const refreshCars = () => {
  return (dispatch: Dispatch) => {
    dispatch(createRefreshCarsRequestAction());
    return fetch('http://localhost:3060/cars')
      .then((res) => res.json())
      .then((cars) => dispatch(createRefreshCarsDoneAction(cars)));
  };
};

// New Car Action

export interface AddCarRequestAction
  extends Action<typeof ADD_CAR_REQUEST_ACTION> {
  payload: { car: NewCar };
}

export type CreateAddCarRequestAction = (car: NewCar) => AddCarRequestAction;

export const createAddCarRequestAction: CreateAddCarRequestAction = (car) => ({
  type: ADD_CAR_REQUEST_ACTION,
  payload: { car },
});

export const addCar = (car: NewCar) => {
  return async (dispatch: Dispatch) => {
    dispatch(createAddCarRequestAction(car));

    await fetch('http://localhost:3060/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    return refreshCars()(dispatch);
  };
};

// End New Car Action

// Existing Car Action

export interface SaveCarRequestAction
  extends Action<typeof SAVE_CAR_REQUEST_ACTION> {
  payload: { car: Car };
}

export type CreateSaveCarRequestAction = (car: Car) => SaveCarRequestAction;

export const createSaveCarRequestAction: CreateSaveCarRequestAction = (
  car,
) => ({
  type: SAVE_CAR_REQUEST_ACTION,
  payload: { car },
});

export const saveCar = (car: Car) => {
  return async (dispatch: Dispatch) => {
    dispatch(createSaveCarRequestAction(car));

    await fetch('http://localhost:3060/cars/' + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    return refreshCars()(dispatch);
  };
};

// End Existing Car Action

// Delete Car Action

export interface DeleteCarRequestAction
  extends Action<typeof DELETE_CAR_REQUEST_ACTION> {
  payload: { carId: number };
}

export type CreateDeleteCarRequestAction = (
  carId: number,
) => DeleteCarRequestAction;

export const createDeleteCarRequestAction: CreateDeleteCarRequestAction = (
  carId,
) => ({
  type: DELETE_CAR_REQUEST_ACTION,
  payload: { carId },
});

export const deleteCar = (carId: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(createDeleteCarRequestAction(carId));

    await fetch('http://localhost:3060/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    });

    return refreshCars()(dispatch);
  };
};

// End Delete Action

// Edit Car Action

export interface EditCarAction extends Action<typeof EDIT_CAR_ACTION> {
  payload: { carId: number };
}

export type CreateEditCarAction = (carId: number) => EditCarAction;

export const createEditCarAction: CreateEditCarAction = (carId) => ({
  type: EDIT_CAR_ACTION,
  payload: { carId },
});

// End Edit Car Car

// Car Action

export type CancelCarAction = Action<typeof CANCEL_CAR_ACTION>;

export type CreateCancelCarAction = () => CancelCarAction;

export const createCancelCarAction: CreateCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});

// End Car Action
