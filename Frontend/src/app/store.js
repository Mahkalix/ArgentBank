import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import bankSlice from "../features/bankSlice";
import profileSlice from "../features/profileSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    bank: bankSlice,
    profile: profileSlice,
  },
});
