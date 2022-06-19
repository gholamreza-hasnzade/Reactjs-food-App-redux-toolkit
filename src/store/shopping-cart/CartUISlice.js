import { createSlice } from "@reduxjs/toolkit";

const cartUISlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
export const cartUiActions = cartUISlice.actions
export default cartUISlice
