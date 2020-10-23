import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { CalcToolContainer } from './containers/CalcToolContainer';
import { calcToolStore } from './stores/calcToolStore';

import { CarToolContainer } from './containers/CarToolContainer';
import { carToolStore } from './stores/carToolStore';

import { ColorToolContainer } from './containers/ColorToolContainer';
import { colorToolStore } from './stores/colorToolStore';

render(
  <>
    <Provider store={calcToolStore}>
      <CalcToolContainer />
    </Provider>
    <Provider store={carToolStore}>
      <CarToolContainer />
    </Provider>
    <Provider store={colorToolStore}>
      <ColorToolContainer />
    </Provider>
  </>,
  document.querySelector('#root'),
);
