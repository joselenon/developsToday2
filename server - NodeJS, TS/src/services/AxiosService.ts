import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface AxiosServiceOptions {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  data?: any;
  headers?: Record<string, string>;
}

export interface IAPIResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

async function AxiosService<T = any>({
  url,
  method = 'get',
  data,
  headers,
}: AxiosServiceOptions): Promise<{
  data: T | null;
  error?: AxiosError;
}> {
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    headers,
  };

  try {
    const response: AxiosResponse<IAPIResponse<T>> = await axios(config);
    return { data: response.data as T };
  } catch (error: any) {
    return { data: null, error };
  }
}

export default AxiosService;
