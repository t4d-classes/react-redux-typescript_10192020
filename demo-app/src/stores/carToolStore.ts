import { createStore, applyMiddleware } from 'redux';
import { carToolReducer } from '../reducers/carToolReducers';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const carToolStore = createStore(
  carToolReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
