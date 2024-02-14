import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
  cartSummary:{}
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      setCartItems: (state, action) =>
        void (state.cartItems=action.payload),
      setCartSummary:(state, action)=> void (state.cartSummary=action.payload),
      increaseCartCount: (state) => void (state.cartCount++),
      clearCart: (state) =>
      void ((state.cartItems=[]),
      (state.cartCount = 0),
      (state.cartSummary = {})
      )
    },
  });
  
  export const {
    setCartItems,
    increaseCartCount,
    clearCart,
    setCartSummary
  } = cartSlice.actions;
  export default cartSlice.reducer;