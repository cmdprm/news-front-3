import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'https://thewizardzhat.com/api',
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
});

// Обработка токена аутентификации, если необходимо
// axiosInstance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default axiosInstance;
