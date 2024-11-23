import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});