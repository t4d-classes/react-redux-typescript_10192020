import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { CalcToolAppState } from '../models/calc';
import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createClearAction,
} from '../actions/calcToolActions';
import { CalcTool } from '../components/CalcTool';

const mapStateToProps = (state: CalcToolAppState) => ({
  result: state.result,
  history: state.history,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  /* bind action creators returns this */
  /*
  { 
    onAdd: (...params) => dispatch(createAddAction(...params)),
    onSubtract: (...params) => dispatch(createSubtractAction(...params)),
  }
  */
  bindActionCreators(
    {
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
      onMultiply: createMultiplyAction,
      onDivide: createDivideAction,
      onClear: createClearAction,
    },
    dispatch,
  );

const createCalcToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CalcToolContainer = createCalcToolContainer(CalcTool);
