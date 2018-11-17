import { combineReducers } from 'redux';
import { HomeReducerState } from './configTypes';

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
  home: homeReducer
});

export default reducer;
