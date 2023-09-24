import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import bankSlice from "../features/bankSlice";
import userSlice from "../features/userSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    bank: bankSlice,
    user: userSlice,
  },
});
