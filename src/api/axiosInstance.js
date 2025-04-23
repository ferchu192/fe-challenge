
import axios from "axios";
// import { getApiToken } from "./config";
// import { response } from './_response';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token en cada request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = `${process.env.REACT_APP_API_TOKEN}`;
    console.log('token', token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interfaz para hacer llamadas API
const api = {
  post: async (query) => {
    try {
      const response = await axiosInstance({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: query
      });
      return response.data;
    } catch (error) {
      console.error("API request error:", error);
      throw error;
    }
  },
};

export default api;