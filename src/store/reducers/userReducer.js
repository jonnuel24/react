import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  accessToken: null,
  farm: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) =>
      void (state.currentUser = action.payload),
    setToken: (state, action) => void (state.accessToken = action.payload),
    setFarm: (state, action) => void (state.farm = action.payload),
    setIsAuthenticated: (state, action) =>
      void (state.isAuthenticated = action.payload),
    logOut: (state) =>
      void ((state.accessToken = null),
      (state.currentUser = null),
      (state.farm = null),
      (state.isAuthenticated = false)),
  },
});

export const {
  setCurrentUser,
  setFarm,
  setToken,
  setIsAuthenticated,
  logOut
} = userSlice.actions;
export default userSlice.reducer;
