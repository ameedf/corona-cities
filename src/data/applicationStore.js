import { createStore } from 'redux';
import { citiesReducer } from './reducers';

export const applicationStore = createStore(citiesReducer);