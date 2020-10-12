import { createStore } from 'redux';
import { citiesReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const applicationStore = createStore(citiesReducer,
  composeWithDevTools(

  )
);