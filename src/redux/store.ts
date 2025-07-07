import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/users-reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type storeType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
