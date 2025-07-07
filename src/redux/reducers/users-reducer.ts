import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLogin: boolean;
}

const initialState: UserState = {
  isLogin: false,
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
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
