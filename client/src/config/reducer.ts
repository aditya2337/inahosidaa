import { combineReducers } from 'redux';

import { HomeReducerState } from './configTypes';
import authReducer from '../routes/Login/login_duck';
import stepReducer from '../routes/stepper/stepper_duck';

const homeReducer = (state: HomeReducerState = {
  isFetching: false
}, action: any) => {
  switch (action.type) {
    case 'START_FETCHING':
      return (<any>Object).assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
};

// we used combineReducers() to combine several reducers into one
const reducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  steps: stepReducer,
});

export default reducer;
