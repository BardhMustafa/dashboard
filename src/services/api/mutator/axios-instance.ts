

import Axios, { AxiosRequestConfig } from 'axios';


export const AXIOS_INSTANCE = Axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export const costumInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const promise = AXIOS_INSTANCE(config).then(({ data }) => data);
  return promise;
};

export default costumInstance;