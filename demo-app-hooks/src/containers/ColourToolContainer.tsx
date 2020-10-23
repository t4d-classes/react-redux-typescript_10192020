import React from 'react';

import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { createAppendColourAction } from '../actions/colourToolActions';
import { ColourToolAppState } from '../models/colourTool';
import { ColourTool } from '../components/ColourTool';
import { Colour } from '../models/colour';

export const ColourToolContainer = () => {
  const stateData = {
    colours: useSelector<ColourToolAppState, Colour[]>(
      (state) => state.colours,
    ),
  };

  const boundActions = bindActionCreators(
    {
      onAppendColour: createAppendColourAction,
    },
    useDispatch(),
  );

  return <ColourTool {...stateData} {...boundActions} />;
};
