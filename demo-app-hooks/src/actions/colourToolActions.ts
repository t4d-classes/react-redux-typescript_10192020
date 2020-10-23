import { Action } from 'redux';

import { NewColour } from '../models/colour';

export const APPEND_COLOUR_ACTION = 'APPEND_COLOUR';

export interface AppendColourAction
  extends Action<typeof APPEND_COLOUR_ACTION> {
  payload: {
    newColour: NewColour;
  };
}

export type CreateAppendColourAction = (newColour: NewColour) => AppendColourAction;

export function isAppendColourAction(
  action: any,
): action is AppendColourAction {
  return action?.type === APPEND_COLOUR_ACTION;
}

export const createAppendColourAction: CreateAppendColourAction = (
  newColour: NewColour,
) => ({
  type: APPEND_COLOUR_ACTION,
  payload: { newColour },
});
