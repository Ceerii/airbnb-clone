import {createStore, applyMiddleware} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initalState = {};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initalState,
  applyMiddleware(...middleware)
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
