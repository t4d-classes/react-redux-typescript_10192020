import { Action } from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';

// export type AddAction = Action<string> & {
//   payload: {
//     value: number;
//   };
// };

// export interface AddAction extends Action<string> {
//   payload: {
//     value: number;
//   };
// }

export interface AddAction extends Action<typeof ADD_ACTION> {
  payload: {
    value: number;
  };
}

export type CreateAddAction = (num: number) => AddAction;

export const createAddAction: CreateAddAction = (num) => {
  return {
    type: ADD_ACTION,
    payload: {
      value: num,
    },
  };
};

export interface SubtractAction extends Action<typeof SUBTRACT_ACTION> {
  payload: {
    value: number;
  };
}

export type CreateSubtractAction = (num: number) => SubtractAction;

export const createSubtractAction: CreateSubtractAction = (num) => {
  return {
    type: SUBTRACT_ACTION,
    payload: {
      value: num,
    },
  };
};
