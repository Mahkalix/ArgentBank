import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
  },
  reducers: {
    setProfile(state, { payload }) {
      state.users = payload;
    },
  },
});
export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
