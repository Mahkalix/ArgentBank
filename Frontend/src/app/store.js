import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../feature/login/loginSlice";
import ProfileSlice from "../feature/profile/profileSlice";

export default configureStore({
  reducer: {
    login: loginSlice,
    profile: ProfileSlice,
  },
});
