import { AxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export const isAxiosError = (error: any): error is AxiosError =>
  error.isAxiosError || false;
