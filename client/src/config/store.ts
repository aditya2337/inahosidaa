import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

/* Redux Thunk middleware allows you to write action creators
 that return a function instead of an action. */
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    thunkMiddleware
  ))
);
sagaMiddleware.run(rootSaga)

export default store;
