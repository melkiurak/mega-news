import { createStore } from "redux";
import { userReducer } from "./reducers/users-reducer";

export type storeType = {
  userReducer: {
    isLogin: boolean;
  };
};

export const store = createStore(userReducer);
