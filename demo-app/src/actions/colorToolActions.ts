import { Action } from 'redux';

import { NewColor } from '../models/colors';

export const ADD_COLOR_ACTION = 'ADD_COLOR';

export interface AddColorAction extends Action<typeof ADD_COLOR_ACTION> {
  payload: {
    newColor: NewColor;
  };
}

export type CreateAddColorAction = (newColor: NewColor) => AddColorAction;

export function isAddColorAction(action: any): action is AddColorAction {
  return action?.type === ADD_COLOR_ACTION;
}

export const createAddColorAction: CreateAddColorAction = (
  newColor: NewColor,
) => ({
  type: ADD_COLOR_ACTION,
  payload: { newColor },
});
