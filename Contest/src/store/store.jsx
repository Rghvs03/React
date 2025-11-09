import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice";
import cartItemsReducer from "../features/CartSlice";
import errorReducer from "../features/ErrorSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemsReducer,
    error: errorReducer,
  },
});
export default store;
