import { fetchApi } from '../../utils/helpers';
import { login } from './api';

const REQUEST_AUTH = 'LOGIN_REQUEST_AUTH';
const RECEIVE_AUTH = 'LOGIN_RECEIVE_AUTH';

export default (state = {
  isRequestingAuth: false
}, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return (<any>Object).assign({}, state, {
        isRequestingAuth: true
      });
    case RECEIVE_AUTH:
      return (<any>Object).assign({}, state, {
        isRequestingAuth: false
      });
    default:
      return state;
  }
}

export const loginUser = payload => (dispatch) => {
  dispatch({ type: REQUEST_AUTH });
  fetchApi(login, [payload])
    .then(res => {
      dispatch({ type: RECEIVE_AUTH });
    })
    .catch(e => console.log(e));
}
