import { Action } from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';

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

export interface MultiplyAction extends Action<typeof MULTIPLY_ACTION> {
  payload: {
    value: number;
  };
}

export type CreateMultiplyAction = (num: number) => MultiplyAction;

export const createMultiplyAction: CreateMultiplyAction = (num) => {
  return {
    type: MULTIPLY_ACTION,
    payload: {
      value: num,
    },
  };
};

export interface DivideAction extends Action<typeof DIVIDE_ACTION> {
  payload: {
    value: number;
  };
}

export type CreateDivideAction = (num: number) => DivideAction;

export const createDivideAction: CreateDivideAction = (num) => {
  return {
    type: DIVIDE_ACTION,
    payload: {
      value: num,
    },
  };
};
