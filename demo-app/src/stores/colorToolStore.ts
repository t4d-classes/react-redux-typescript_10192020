import { createStore } from 'redux';
import { colorToolReducer } from '../reducers/colorToolReducers';

export const colorToolStore = createStore(colorToolReducer);
