import axios, { AxiosInstance } from 'axios';
// ** Config

// Define the base URL for API requests
const baseURL = 'https://product-deal-backend.onrender.com'
// const baseURL = 'http://localhost:8080'

// Create an instance of Axios with default configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${baseURL}/api`, // Base URL for all requests
  headers: {
    'Content-Type': 'application/json' //  Default content type
  }
})

axiosInstance.interceptors.request.use(function (config) {
    console.log('config',config);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosInstance