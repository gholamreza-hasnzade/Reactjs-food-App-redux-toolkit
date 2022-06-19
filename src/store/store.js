import { configureStore } from "@reduxjs/toolkit";
import { cartUISlice, cartSlice } from "./shopping-cart";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUI: cartUISlice.reducer,
  },
});

export default store;
