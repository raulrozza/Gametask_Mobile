interface IRequestConfig {
  params?: any;
  headers?: any;
}

export default interface IHTTPProvider {
  addHeader(key: string, value: string): void;
  removeHeader(key: string): void;

  delete<T = unknown>(path: string, config?: IRequestConfig): Promise<T>;
  get<T = unknown>(path: string, config?: IRequestConfig): Promise<T>;
  patch<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T>;
  post<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T>;
  put<T = unknown>(
    path: string,
    body?: unknown,
    config?: IRequestConfig,
  ): Promise<T>;
}
