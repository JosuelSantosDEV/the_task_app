
import axios from "axios";
import { API_BASE_URL, THE_TASK_APP_ACCESS_TOKEN } from "../../../constants/consts";
import type { AppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/store/reduces/auth";

const AUTHORIZATION_HEADER="Authorization";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  //withCredentials: true, // opcional, se precisar mandar cookies
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`;
    localStorage.setItem(THE_TASK_APP_ACCESS_TOKEN, token);
  } else {
    delete api.defaults.headers.common[AUTHORIZATION_HEADER];
    localStorage.removeItem(THE_TASK_APP_ACCESS_TOKEN);
  }
};


export const setupInterceptors = (dispatch: AppDispatch) => {
  api.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error?.response?.status === 401) {
        dispatch(logout());
      }
      return Promise.reject(error);
    }
  );
};
