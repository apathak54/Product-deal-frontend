import axios, { AxiosInstance } from 'axios';
//creating the base url
//const baseURL = 'http://localhost:8080'
const baseURL = 'https://product-deal-backend-fchy.onrender.com'

// Create an instance of Axios with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${baseURL}/api`, // Base URL for all requests
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('config', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance