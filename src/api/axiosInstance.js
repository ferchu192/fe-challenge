
import axios from "axios";
// import { getApiToken } from "./config";
// import { response } from './_response';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://streaming.bitquery.io/graphql',
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token en cada request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = "ory_at_Nu0iU-f2rdYju0lzcz0w3-priyrUjF4ksPPA3cNpUSg.G1LARW9cax4cXKbGWpYrv-bpaVIOqnXhG-sbKISWGKA";
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