import Constants from '../../config/constants';

const allConstants = new Constants()
const { API, fetchOptions } = allConstants;

export const login = payload => fetch(
  API.AUTH.LOGIN, {
    ...fetchOptions.POST,
    body: JSON.stringify(payload),
  }
)
