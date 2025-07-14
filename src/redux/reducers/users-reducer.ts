import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types";

interface UserState {
  isLogin: boolean;
  user: User | null;
}

const initialState: UserState = {
  isLogin: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state) {
      state.isLogin = true;
    },
    logOut(state) {
      state.isLogin = false;
      state.user = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { logIn, logOut, setUser } = userSlice.actions;
export default userSlice.reducer;
