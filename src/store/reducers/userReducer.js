import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  farm: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return (state.user = action.payload);
    },
    setToken: (state, action) => {
      return (state.accessToken = action.payload);
    },
    setFarm: (state, action) => {
      return (state.farm = action.payload);
    },
    setIsAuthenticated: (state, action) => {
      return (state.isAuthenticated = action.payload);
    },
  },
});

export const {
  setUser,
  setFarm,
  setToken,
  setIsAuthenticated,
} = userSlice.actions;
export default userSlice.reducer;
