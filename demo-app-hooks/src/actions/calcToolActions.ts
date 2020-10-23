import { Action } from 'redux';

export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const SET_VALIDATION_MESSAGE_ACTION = 'SET_VALIDATION_MESSAGE';
export const DELETE_HISTORY_ENTRY_ACTION = 'DELETE_HISTORY_ENTRY';

export interface AddAction extends Action<typeof ADD_ACTION> {
  payload: {
    num: number;
  };
}

export type CreateAddAction = (value: number) => AddAction;

export function isAddAction(action: any): action is AddAction {
  return action?.type === ADD_ACTION;
}

export const createAddAction: CreateAddAction = (value: number) => ({
  type: ADD_ACTION,
  payload: { num: value },
});

export interface SubtractAction extends Action<typeof SUBTRACT_ACTION> {
  payload: {
    value: number;
  };
}

export type CreateSubtractAction = (value: number) => SubtractAction;

export function isSubtractAction(action: any): action is SubtractAction {
  return action?.type === SUBTRACT_ACTION;
}

export const createSubtractAction: CreateSubtractAction = (value: number) => ({
  type: SUBTRACT_ACTION,
  payload: { value },
});

export interface MultiplyAction extends Action<typeof MULTIPLY_ACTION> {
  payload: {
    value: number;
  };
}

export type CreateMultiplyAction = (value: number) => MultiplyAction;

export function isMultiplyAction(action: any): action is MultiplyAction {
  return action?.type === MULTIPLY_ACTION;
}

export const createMultiplyAction: CreateMultiplyAction = (value: number) => ({
  type: MULTIPLY_ACTION,
  payload: { value },
});

export interface DivideAction extends Action<typeof DIVIDE_ACTION> {
  payload: {
    value: number;
  };
}

export type CreateDivideAction = (
  value: number,
) => DivideAction | SetValidationMessageAction;

export function isDivideAction(action: any): action is DivideAction {
  return action?.type === DIVIDE_ACTION;
}

export const createDivideAction: CreateDivideAction = (value: number) => {
  if (value === 0) {
    return createSetValidationMessageAction('Division by zero is not allowed');
  } else {
    return {
      type: DIVIDE_ACTION,
      payload: { value },
    };
  }
};

export interface ClearAction extends Action<typeof CLEAR_ACTION> {}

export type CreateClearAction = () => ClearAction;

export function isClearAction(action: any): action is ClearAction {
  return action?.type === CLEAR_ACTION;
}

export const createClearAction: CreateClearAction = () => ({
  type: CLEAR_ACTION,
});

export interface SetValidationMessageAction
  extends Action<typeof SET_VALIDATION_MESSAGE_ACTION> {
  payload: { validationMessage: string };
}

export type CreateSetValidationMessageAction = (
  validationMessage: string,
) => SetValidationMessageAction;

export function isSetValidationMessageAction(
  action: any,
): action is SetValidationMessageAction {
  return action?.type === SET_VALIDATION_MESSAGE_ACTION;
}

export const createSetValidationMessageAction: CreateSetValidationMessageAction = (
  validationMessage: string,
) => ({
  type: SET_VALIDATION_MESSAGE_ACTION,
  payload: { validationMessage },
});

export interface DeleteHistoryEntryAction
  extends Action<typeof DELETE_HISTORY_ENTRY_ACTION> {
  payload: { historyEntryId: number };
}

export type CreateDeleteHistoryEntryAction = (
  historyEntryId: number,
) => DeleteHistoryEntryAction;

export function isDeleteHistoryEntryAction(
  action: any,
): action is DeleteHistoryEntryAction {
  return action?.type === DELETE_HISTORY_ENTRY_ACTION;
}

export const createDeleteHistoryEntryAction: CreateDeleteHistoryEntryAction = (
  historyEntryId: number,
) => ({
  type: DELETE_HISTORY_ENTRY_ACTION,
  payload: { historyEntryId },
});
