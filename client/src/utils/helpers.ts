export const fetchApi = (apiFunc, params) => {
  return apiFunc(...params)
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
}
