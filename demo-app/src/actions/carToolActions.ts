import { Action } from 'redux';

import { Car, NewCar } from '../models/cars';

export const ADD_CAR_ACTION = 'ADD_CAR';
export const SAVE_CAR_ACTION = 'SAVE_CAR';
export const DELETE_CAR_ACTION = 'DELETE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

// New Car Action

export interface AddCarAction extends Action<typeof ADD_CAR_ACTION> {
  payload: { car: NewCar };
}

export type CreateAddCarAction = (car: NewCar) => AddCarAction;

export const createAddCarAction: CreateAddCarAction = (car) => ({
  type: ADD_CAR_ACTION,
  payload: { car },
});

// End New Car Action

// Existing Car Action

export interface SaveCarAction extends Action<typeof SAVE_CAR_ACTION> {
  payload: { car: Car };
}

export type CreateSaveCarAction = (car: Car) => SaveCarAction;

export const createSaveCarAction: CreateSaveCarAction = (car) => ({
  type: SAVE_CAR_ACTION,
  payload: { car },
});

// End Existing Car Action

// Delete Car Action

export interface DeleteCarAction extends Action<typeof DELETE_CAR_ACTION> {
  payload: { carId: number };
}

export type CreateDeleteCarAction = (carId: number) => DeleteCarAction;

export const createDeleteCarAction: CreateDeleteCarAction = (carId) => ({
  type: DELETE_CAR_ACTION,
  payload: { carId },
});

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
