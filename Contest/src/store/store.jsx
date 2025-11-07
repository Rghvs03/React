import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice";
import cartItemsReducer from "../features/CartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems:cartItemsReducer,
    
  },
});
export default store;
