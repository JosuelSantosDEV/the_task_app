import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    login: () => {}
  }
});

export const {login} = auth.actions;
export default auth.reducer;