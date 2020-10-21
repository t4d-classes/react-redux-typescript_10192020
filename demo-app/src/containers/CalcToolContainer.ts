import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { CalcToolState } from '../models/calc';
import {
  createAddAction,
  createSubtractAction,
} from '../actions/calcToolActions';
import { CalcTool } from '../components/CalcTool';

const mapStateToProps = (state: CalcToolState) => ({ result: state.result });

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
    },
    dispatch,
  );

const createCalcToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CalcToolContainer = createCalcToolContainer(CalcTool);
