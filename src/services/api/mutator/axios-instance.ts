import jwtDecode from 'jwt-decode';
import Axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';

import { isTokenExpired } from '@/helpers/tokenValidation';
import axios from 'axios';
import { authStore } from '@/store/authStore';

interface JWTTokenData {
  exp: number;
  iat: number;
  user: {
    email: string;
    username: string;
  };
}

const accessToken = authStore.getState().accessToken;
const getAccessToken = () => {
  if (!accessToken) {
    return '';
  }
  const tokenData = jwtDecode(accessToken) as JWTTokenData;
  if (isTokenExpired(tokenData.exp)) {
    authStore.getState().removeAccessToken();
    return null;
  }
  return `Bearer ${accessToken}`;
};

const createApiInstance = () => {
  const instance = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  const accessToken = getAccessToken();
  if (accessToken) {
    instance.defaults.headers.common.Authorization = accessToken;
  }
  return instance;
};

const apiInstance = createApiInstance();

export const setAuthorizationHeaders = (token: string) => {
  apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export  const axiosInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const cancelTokenSource: CancelTokenSource = Axios.CancelToken.source();

  const requestConfig: AxiosRequestConfig = {
    ...config,
    ...options,
    cancelToken: cancelTokenSource.token,
  };

  return apiInstance
    .request<T, AxiosResponse<T>>(requestConfig)
    .then((response: AxiosResponse<T>) => {
      return response;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        authStore().removeAccessToken();
        window.location.href = '/login';
      }
      throw error;
    }) as Promise<AxiosResponse<T>>;
};
export default axiosInstance;