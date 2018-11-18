const IS_REQUESTING = 'LOGIN_IS_REQUESTING';

export default (state = {
  isRequesting: false
}, action) => {
  switch (action.type) {
    case IS_REQUESTING:
      return (<any>Object).assign({}, state, {
        isRequesting: action.isRequesting
      });
    default:
      return state;
  }
}
