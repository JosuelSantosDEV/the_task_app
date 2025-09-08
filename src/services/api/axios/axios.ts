// src/services/api/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // opcional, se precisar mandar cookies
});

// // Interceptador de request (ex.: para token)
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Interceptador de response (ex.: para tratar erros globais)
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Limpar dados de autenticação e redirecionar para login
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       window.location.href = "/auth/login";
//     }
//     return Promise.reject(error);
//   }
// );
