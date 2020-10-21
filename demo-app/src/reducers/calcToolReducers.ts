import { CalcToolState } from '../models/calc';
import {
  AddAction,
  SubtractAction,
  ADD_ACTION,
  SUBTRACT_ACTION,
} from '../actions/calcToolActions';

type CalcToolActions = AddAction | SubtractAction;

export const calcToolReducer = (
  state: CalcToolState = { result: 0 },
  action: CalcToolActions,
) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.payload.value,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.value,
      };
    default:
      return state;
  }
};
