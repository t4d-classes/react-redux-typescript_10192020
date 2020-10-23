import { createStore } from 'redux';

import { colourToolReducer } from '../reducers/colourToolReducers';

export const colourToolStore = createStore(colourToolReducer);
