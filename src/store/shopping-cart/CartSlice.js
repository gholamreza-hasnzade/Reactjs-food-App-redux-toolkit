import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    addItem(state, action) {
        const newItem = action.payload;
        const existingItem = state.cartItems.find(
          (item) => item.id === newItem.id
        );
        state.totalQuantity++;
  
        if (!existingItem) {
          /*  
              note: if you use just redux you should not mute
              state array instead of clone the state  array,
              but if you use redux toolkit will not a problem
              because redux toolkit clone the array behind the scene    
          */
          state.cartItems.push({
            id: newItem.id,
            title: newItem.title,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            image01 : newItem.image01
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) + Number(existingItem.price);
        }
  
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity)
        );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
