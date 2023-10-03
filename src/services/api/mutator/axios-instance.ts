

import Axios, { AxiosRequestConfig } from 'axios';


export const AXIOS_INSTANCE = Axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL});

// Function to set the JWT token in the Axios instance headers
export const setAuthToken = (token: string) => {
  if (token) {
    AXIOS_INSTANCE.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete AXIOS_INSTANCE.defaults.headers.common['Authorization'];
  }
};

// Call setAuthToken with your JWT token when the user logs in
// For example:

// Your custom function with JWT token authentication
export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const promise = AXIOS_INSTANCE(config).then(({ data }) => data);
  return promise;
};

export default customInstance;
