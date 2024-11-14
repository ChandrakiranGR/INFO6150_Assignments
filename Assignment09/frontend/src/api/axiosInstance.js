import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error('API call failed:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
