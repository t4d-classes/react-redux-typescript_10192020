// default import
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { CalcToolContainer } from './containers/CalcToolContainer';
import { calcToolStore } from './stores/calcToolStore';

render(
  <Provider store={calcToolStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector('#root'),
);
