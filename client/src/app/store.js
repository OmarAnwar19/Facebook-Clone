import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../services/auth/authSlice";
import postReducer from "../services/features/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});
