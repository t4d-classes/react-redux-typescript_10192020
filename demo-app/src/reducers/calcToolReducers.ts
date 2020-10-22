import { Reducer, AnyAction, combineReducers } from 'redux';
import { CalcToolAppState, HistoryEntry } from '../models/calc';
import {
  AddAction,
  SubtractAction,
  MultiplyAction,
  DivideAction,
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
} from '../actions/calcToolActions';

type CalcToolActions =
  | AddAction
  | SubtractAction
  | MultiplyAction
  | DivideAction;

// Pure Function
// - All data comes in through the parameters
// - Parameters cannot be mutated
// - No side effects can be performed
// - The only output is the return value
export const resultReducer: Reducer<number, CalcToolActions> = (
  result = 0,
  action,
) => {
  switch (action.type) {
    case ADD_ACTION:
      return result + action.payload.value;
    case SUBTRACT_ACTION:
      return result - action.payload.value;
    case MULTIPLY_ACTION:
      return result * action.payload.value;
    case DIVIDE_ACTION:
      return result / action.payload.value;
    default:
      return result;
  }
};

export const historyReducer: Reducer<HistoryEntry[], CalcToolActions> = (
  history = [],
  action,
) => {
  if (
    [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(
      action.type,
    )
  ) {
    return [
      ...history,
      {
        opName: action.type,
        opValue: action.payload.value,
        id: Math.max(...history.map((he) => he.id), 0) + 1,
      },
    ];
  }

  return history;
};

// export const calcToolReducer: Reducer<CalcToolAppState, AnyAction> = (
//   state = {} as CalcToolAppState,
//   action,
// ) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action as CalcToolActions),
//     history: historyReducer(state.history, action as CalcToolActions),
//   };
// };

export const calcToolReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
});
