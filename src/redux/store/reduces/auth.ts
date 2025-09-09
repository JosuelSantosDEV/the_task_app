import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    login: () => {},
    logout: () => {}
  }
});

export const {login, logout} = auth.actions;
export default auth.reducer;