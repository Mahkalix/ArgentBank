import { createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
  name: "users",
  initialState: {
    users: null,
  },
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload;
    },
  },
});
export const { setUsers } = login.actions;
export default login.reducer;
