 import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/CartSlice";
 
const store = configureStore ({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store

