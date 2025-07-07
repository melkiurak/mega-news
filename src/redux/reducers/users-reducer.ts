export const userActionType = {
  isLoggedIn: "IS_LOGGED_IN",
};

export const userReducer = (
  state = { isLogin: false },
  action: { type: keyof typeof userActionType }
) => {
  switch (action.type) {
    case userActionType.isLoggedIn:
      return { isLogin: true };
    default:
      return state;
  }
};
