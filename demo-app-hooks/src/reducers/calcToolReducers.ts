import { Reducer, AnyAction, combineReducers } from 'redux';

import {
  isAddAction,
  // isSubtractAction,
  // isMultiplyAction,
  // isDivideAction,
  isClearAction,
  isSetValidationMessageAction,
  isDeleteHistoryEntryAction,
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
} from '../actions/calcToolActions';
import { HistoryEntry, CalcToolAppState } from '../models/calcTool';

// export const resultReducer: Reducer<number, AnyAction> = (
//   result = 0,
//   action,
// ) => {
//   if (isAddAction(action)) {
//     return result + action.payload.num;
//   }

//   if (isSubtractAction(action)) {
//     return result - action.payload.value;
//   }

//   if (isMultiplyAction(action)) {
//     return result * action.payload.value;
//   }

//   if (isDivideAction(action)) {
//     return result / action.payload.value;
//   }

//   if (isClearAction(action)) {
//     return 0;
//   }

//   return result;
// };

export const historyReducer: Reducer<HistoryEntry[], AnyAction> = (
  history = [],
  action,
) => {
  if (isDeleteHistoryEntryAction(action)) {
    return history.filter((h) => h.id !== action.payload.historyEntryId);
  }

  if (isClearAction(action)) {
    return [];
  }

  if (
    [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(
      action.type,
    )
  ) {
    return [
      ...history,
      {
        id: Math.max(...history.map((h) => h.id), 0) + 1,
        operation: action.type,
        value: isAddAction(action) ? action.payload.num : action.payload.value,
      },
    ];
  }
  return history;
};

export const validationMessageReducer: Reducer<string, AnyAction> = (
  _,
  action,
) => {
  if (isSetValidationMessageAction(action)) {
    return action.payload.validationMessage;
  }

  return '';
};

// export const calcToolReducer: Reducer<CalcToolAppState, AnyAction> = (
//   state = {} as CalcToolAppState,
//   action,
// ) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     validationMessage: validationMessageReducer(
//       state.validationMessage,
//       action,
//     ),
//     history: historyReducer(state.history, action),
//   };
// };

export const calcToolReducer: Reducer<
  CalcToolAppState,
  AnyAction
> = combineReducers({
  // result: resultReducer,
  validationMessage: validationMessageReducer,
  history: historyReducer,
});
