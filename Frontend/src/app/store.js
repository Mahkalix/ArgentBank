import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../feature/signIn/SignIn";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
