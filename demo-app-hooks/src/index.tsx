import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { calcToolStore } from './stores/calcToolStore';
import { CalcToolContainer } from './containers/CalcToolContainer';

import { colourToolStore } from './stores/colourToolStore';
import { ColourToolContainer } from './containers/ColourToolContainer';

import { carToolStore } from './stores/carToolStore';
import { CarToolContainer } from './containers/CarToolContainer';

ReactDOM.render(
  <>
    <Provider store={calcToolStore}>
      <CalcToolContainer />
    </Provider>
    <Provider store={colourToolStore}>
      <ColourToolContainer />
    </Provider>
    <Provider store={carToolStore}>
      <CarToolContainer />
    </Provider>
  </>,
  document.querySelector('#root'),
);
