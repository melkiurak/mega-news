import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/users-reducer";

const rootReducer = combineReducers({
  userReducer,
});

export const store = createStore(rootReducer);
export type storeType = ReturnType<typeof rootReducer>;
