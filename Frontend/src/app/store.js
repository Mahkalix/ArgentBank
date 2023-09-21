import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../feature/login/Login";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
