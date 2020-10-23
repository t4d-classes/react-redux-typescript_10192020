import { Reducer, AnyAction, combineReducers } from 'redux';

import { Color } from '../models/colors';
import { ADD_COLOR_ACTION } from '../actions/colorToolActions';

const initialColors: Color[] = [
  { id: 1, name: 'pink', hexcode: 'ffc0cb' },
  { id: 2, name: 'blue', hexcode: '0000ff' },
  { id: 3, name: 'purple', hexcode: '800080' },
  { id: 4, name: 'cyan', hexcode: '00ffff' },
];

export const colorsReducer: Reducer<Color[], AnyAction> = (
  colors = initialColors,
  action,
) => {
  if (action.type === ADD_COLOR_ACTION) {
    return [
      ...colors,
      {
        ...action.payload.newColor,
        id: Math.max(...colors.map((c) => c.id), 0) + 1,
      },
    ];
  }

  return colors;
};

export const colorToolReducer = combineReducers({
  colors: colorsReducer,
});
