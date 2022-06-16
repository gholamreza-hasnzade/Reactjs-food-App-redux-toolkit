import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducer: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        /*  === note: if you use just redux you should not mute
           state array instead of clone the state  array,
            but if you use redux toolkit will not a problem
           because redux toolkit clone the array behind the scene    
           */
        state.cartItem.push({
          id: newItem.id,
          title: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(existingItem.price);
      }

      state.totalAmount = state.cartItem.reducer(
        (total, item) => total + Number(item.price) * Number(item.quantity)
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
