import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_NATIVE_API_URL,
});

export const addApiHeader = (header: string, value: string): void => {
  api.defaults.headers[header] = value;
};

export const removeApiHeader = (header: string): void => {
  delete api.defaults.headers[header];
};

export default api;
