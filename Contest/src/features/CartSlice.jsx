import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
  },
  reducers: {
    AddtoCart: (state, actions) => {
      const existingItems = state.cartItems.find(
        (elem) => elem.id === actions.payload.id
      );
      existingItems
        ? existingItems.quantity++
        : state.cartItems.push({ ...actions.payload, quantity: 1 });
    },
    RemovefromCart: (state, actions) => {
      const existingItems = state.cartItems.find(
        (elem) => elem.id === actions.payload.id
      );
      existingItems.quantity > 1
        ? existingItems.quantity--
        : (state.cartItems = state.cartItems.filter(
            (elem) => elem.id !== actions.payload.id
          ));
    },
  },
});
export const { AddtoCart, RemovefromCart } = cartSlice.actions;
export default cartSlice.reducer;
