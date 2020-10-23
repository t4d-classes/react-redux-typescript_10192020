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

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onAddColor: createAddColorAction,
    },
    dispatch,
  );

const createColorToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const ColorToolContainer = createColorToolContainer(ColorTool);
