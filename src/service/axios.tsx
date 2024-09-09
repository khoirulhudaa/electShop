import axios from "axios";
import store from "../redux/store";

const api = axios.create({
  baseURL: 'https://restapi-electshop.vercel.app',
  headers: {
    "Content-Type": "application/json",
  }    
});

// Fungsi untuk mengatur token dalam header permintaan Axios
api.interceptors.request.use(async function (config) {

  // Ambil token dari store sesuai kebutuhan
  const token = store.getState().authReducer.token

  if (token) {
    config.headers["Authorization"] = token;
  }

  // Periksa apakah permintaan mengandung file
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  
  return config;

}, function (error) {
  console.log('error:', error)
  return Promise.reject(error);

});

// Tambahkan interceptor respons
api.interceptors.response.use(function (response) {
  
  console.log('response interceptors1:', response)
  return response

}, function (error) {

  console.log('error interceptors2:', error)
  if (error.response && error.response.status === 403) {
      console.log("error interceptors new:", error)
      window.location.pathname = '/signin'
  }

  return Promise.reject(error);

});

export default api;
