import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    login: "ok",
  },
  reducers: {
    setLogin(state, { payload }) {
      state.users = payload;
    },
  },
});
export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
