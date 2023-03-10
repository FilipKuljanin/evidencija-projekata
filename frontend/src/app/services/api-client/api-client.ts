import { AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

const get = (endpoint: string, queryParams: any = {}, config: any = {}): Promise<AxiosResponse> => {
  return axiosInstance.get(endpoint, {
    params: queryParams,
    ...config,
  });
};

const post = (endpoint: string, body: any, queryParams: any = {}): Promise<AxiosResponse> => {
  return axiosInstance.post(endpoint, body, {
    params: queryParams,
  });
};

const put = (endpoint: string, body: any, queryParams: any = {}): Promise<AxiosResponse> => {
  return axiosInstance.put(endpoint, body, {
    params: queryParams,
  });
};

const remove = (endpoint: string, queryParams: any = {}): Promise<AxiosResponse> => {
  return axiosInstance.delete(endpoint, {
    params: queryParams,
  });
};

const ApiClient = {get, post, put, remove};

export default ApiClient;
