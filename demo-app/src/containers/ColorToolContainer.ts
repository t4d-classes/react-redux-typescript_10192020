import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ColorToolAppState } from '../models/colors';
import { createAddColorAction } from '../actions/colorToolActions';
import { ColorTool } from '../components/ColorTool';

const mapStateToProps = (state: ColorToolAppState) => {
  return {
    colors: state.colors,
  };
};

/// const add = (a: number, b: number) => a + b;

const add = (a: number, b: number) => {
  return a + b;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      onAddColor: createAddColorAction,
    },
    dispatch,
  );
};

const createColorToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const ColorToolContainer = createColorToolContainer(ColorTool);
