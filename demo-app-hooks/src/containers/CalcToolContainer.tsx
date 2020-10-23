import React from 'react';

import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createClearAction,
  createDeleteHistoryEntryAction,
} from '../actions/calcToolActions';
import { CalcToolAppState, HistoryEntry } from '../models/calcTool';
import { CalcTool } from '../components/CalcTool';
import { resultSelector } from '../selectors/calcToolSelectors';

export const CalcToolContainer = () => {
  const stateData = {
    result: useSelector<CalcToolAppState, number>(resultSelector),
    validationMessage: useSelector<CalcToolAppState, string>(
      (state) => state.validationMessage,
    ),
    history: useSelector<CalcToolAppState, HistoryEntry[]>(
      (state) => state.history,
    ),
  };

  const boundActions = bindActionCreators(
    {
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
      onMultiply: createMultiplyAction,
      onDivide: createDivideAction,
      onClear: createClearAction,
      onDeleteHistoryEntry: createDeleteHistoryEntryAction,
    },
    useDispatch(),
  );

  return <CalcTool {...stateData} {...boundActions} />;
};
