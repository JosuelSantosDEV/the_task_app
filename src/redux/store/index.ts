import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import auth from "./reduces/auth";

const store = configureStore({
  reducer: auth,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;