import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// store

const middlewares = [];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;