import { Reducer, AnyAction, combineReducers } from 'redux';

import { Colour } from '../models/colour';
import { isAppendColourAction } from '../actions/colourToolActions';

const initialColours: Colour[] = [
  { id: 1, name: 'pink', hexcode: 'ffc0cb' },
  { id: 2, name: 'blue', hexcode: '0000ff' },
  { id: 3, name: 'purple', hexcode: '800080' },
  { id: 4, name: 'cyan', hexcode: '00ffff' },
];

export const coloursReducer: Reducer<Colour[], AnyAction> = (
  colours = initialColours,
  action,
) => {
  if (isAppendColourAction(action)) {
    return [
      ...colours,
      {
        ...action.payload.newColour,
        id: Math.max(...colours.map((c) => c.id), 0) + 1,
      },
    ];
  }

  return colours;
};

export const colourToolReducer = combineReducers({
  colours: coloursReducer,
});
