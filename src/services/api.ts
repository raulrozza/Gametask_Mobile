import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_NATIVE_API_URL,
});

export default api;
