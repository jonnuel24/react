import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  summary: {},
  delivery: {
    address: "",
    phone: "",
    name: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => void (state.items = action.payload),
    setSummary: (state, action) => void (state.summary = action.payload),
    setDelivery: (state, action) => void (state.delivery = action.payload),
    increaseCount: (state) => void state.count++,
    clear: (state) =>
      void ((state.items = []), (state.count = 0), (state.summary = {})),
  },
});

export const { setItems, increaseCount, clear, setSummary, setDelivery } = cartSlice.actions;
export default cartSlice.reducer;
