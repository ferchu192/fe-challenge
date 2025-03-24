
import axios from "axios";
// import { getApiToken } from "./config";
import { response } from './_response';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://streaming.bitquery.io/graphql',
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token en cada request
api.interceptors.request.use(
  (config) => {
    const token = "ory_at_rHLj8oaOK4Frk37T5-Yi5Ij8LkcfS7S3CLo3-mjsEDU.cnaeHiykELXVULx_NKZxjcTukp_qYr0NSPMgEu72dlg";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const api2 = {
  post: () => response,
}

export default api2;
