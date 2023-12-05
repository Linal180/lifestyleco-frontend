import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { getApiCallHeaders } from '../utils';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://lifestyle.developersouls.com/public/api',
  headers: getApiCallHeaders()
});

type ApiResponse<T> = AxiosResponse<T>;
type RequestParams = Record<string, any>;

export const apiGet = async <T>(url: string, params: RequestParams = {}): Promise<T> => {
  try {
    const response: ApiResponse<T> = await instance.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPost = async <T>(url: string, data: any = {}): Promise<T> => {
  try {
    const response: ApiResponse<T> = await instance.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPut = async <T>(url: string, data: any = {}): Promise<T> => {
  try {
    const response: ApiResponse<T> = await instance.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPatch = async <T>(url: string, data: any = {}): Promise<T> => {
  try {
    const response: ApiResponse<T> = await instance.patch(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiDelete = async <T>(url: string): Promise<T> => {
  try {
    const response: ApiResponse<T> = await instance.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
