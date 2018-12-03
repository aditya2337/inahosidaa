export default class Constants {
  readonly BASE_URL = 'http://localhost:4000';
  readonly API = {
    AUTH: {
      LOGIN: `${this.BASE_URL}/api/v1/login`
    }
  }
  readonly fetchHeaders = {
    headers: {
      'Content-Type': 'application/json',
    }
  };
  readonly fetchOptions = {
    GET: {
      ...this.fetchHeaders
    },
    POST: {
      method: 'POST',
      ...this.fetchHeaders
    }
  }
}
