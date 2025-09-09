import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../../api/services/axios/UserService";
import type { IUserData, IUserLoginData } from "../../../interfaces/IUserData";
import { THE_TASK_APP_ACCESS_TOKEN } from "../../../constants/consts";
import { api, setAuthToken } from "../../../api/services/axios/axios";

export const userLoginThunk = createAsyncThunk(
    "main",
    async (loginData: IUserLoginData) => {
        const {data} = await UserService.loginUser(loginData);
        return data;
    }
);

export const checkAuth = createAsyncThunk<IUserData, void, { rejectValue: string }>(
    "auth/checkAuth",
    async (_, thunkAPI) => {
      const token = localStorage.getItem(THE_TASK_APP_ACCESS_TOKEN);
      if (!token) {
        return thunkAPI.rejectWithValue("no-token");
      }
      try {
        const res = await api.get("/profile/me");
        console.log("User data: ",res.data);
        setAuthToken(token);
        return res.data as IUserData;
      } catch (error) {
        console.log("Error in checkAuth: ",error);
        setAuthToken(null);
        return thunkAPI.rejectWithValue("invalid-token");
      }
    }
  );