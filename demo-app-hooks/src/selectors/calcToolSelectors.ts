import { CalcToolAppState } from '../models/calcTool';

import {
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
} from '../actions/calcToolActions';

export const resultSelector = (state: CalcToolAppState) => {
  let result = 0;

  state.history.forEach((historyEntry) => {
    switch (historyEntry.operation) {
      case ADD_ACTION:
        result = result + historyEntry.value;
        break;
      case SUBTRACT_ACTION:
        result = result - historyEntry.value;
        break;
      case MULTIPLY_ACTION:
        result = result * historyEntry.value;
        break;
      case DIVIDE_ACTION:
        result = result / historyEntry.value;
        break;
    }
  });

  return result;

  // return state.history.reduce((result: number, historyEntry: HistoryEntry) => {
  //   switch (historyEntry.operation) {
  //     case ADD_ACTION:
  //       return result + historyEntry.value;
  //     case SUBTRACT_ACTION:
  //       return result - historyEntry.value;
  //     case MULTIPLY_ACTION:
  //       return result * historyEntry.value;
  //     case DIVIDE_ACTION:
  //       return result / historyEntry.value;
  //     default:
  //       return result;
  //   }
  // }, 0);
};
