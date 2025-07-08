import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLogin: boolean;
  username: string | null;
  avatar: string | null;
}

const initialState: UserState = {
  isLogin: false,
  username: null,
  avatar: null,
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
    setUser(state, action) {
      state.username = action.payload.username;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { logIn, logOut, setUser } = userSlice.actions;
export default userSlice.reducer;
