import { Reducer, AnyAction, combineReducers } from 'redux';
import { HistoryEntry } from '../models/calc';
import {
  AddAction,
  SubtractAction,
  MultiplyAction,
  DivideAction,
  ClearAction,
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
  CLEAR_ACTION,
  DeleteHistoryEntryAction,
  DELETE_HISTORY_ENTRY_ACTION,
} from '../actions/calcToolActions';

type MathOpActions = AddAction | SubtractAction | MultiplyAction | DivideAction;

function isMathOp(action: AnyAction): action is MathOpActions {
  return [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(
    action.type,
  );
}

type CalcToolActions = MathOpActions | ClearAction | DeleteHistoryEntryAction;

export const checkInput = (action: MathOpActions) => {
  if (action.type === DIVIDE_ACTION && action.payload.value === 0) {
    return 'Division by zero is not allowed.';
  }

  if (action.payload.value < 0) {
    return 'Value must be greater than or equal to 0.';
  }

  return '';
};

// Pure Function
// - All data comes in through the parameters
// - Parameters cannot be mutated
// - No side effects can be performed
// - The only output is the return value
// export const resultReducer: Reducer<number, CalcToolActions> = (
//   result = 0,
//   action,
// ) => {
//   if (isMathOp(action) && checkInput(action)) {
//     return result;
//   }

//   switch (action.type) {
//     case ADD_ACTION:
//       // if (isAddAction(action)) {
//       //   return result + action.payload.value;
//       // }
//       return result + action.payload.value;
//     case SUBTRACT_ACTION:
//       return result - action.payload.value;
//     case MULTIPLY_ACTION:
//       return result * action.payload.value;
//     case DIVIDE_ACTION:
//       return result / action.payload.value;
//     case CLEAR_ACTION:
//       return 0;
//     default:
//       return result;
//   }
// };

export const historyReducer: Reducer<HistoryEntry[], CalcToolActions> = (
  history = [],
  action,
) => {
  if (action.type === CLEAR_ACTION) {
    return [];
  }

  if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
    return history.filter((he) => he.id !== action.payload.historyEntryId);
  }

  if (isMathOp(action) && checkInput(action)) {
    return history;
  }

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

export const errorMessageReducer: Reducer<string, CalcToolActions> = (
  errorMessage = '',
  action,
) => {
  if (isMathOp(action)) {
    const errMsg = checkInput(action);
    if (errMsg.length > 0) {
      return errMsg;
    } else {
      return '';
    }
  }

  if (
    action.type === CLEAR_ACTION ||
    action.type === DELETE_HISTORY_ENTRY_ACTION
  ) {
    return '';
  }

  return errorMessage;
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
  errorMessage: errorMessageReducer,
  // result is now derived/computed from state
  // result: resultReducer,
  history: historyReducer,
});
