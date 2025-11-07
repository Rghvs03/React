import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    GetProductsFromAPI: (state, actions) => {
      state.products = actions.payload;
    },
  },
});
export const { GetProductsFromAPI } = productSlice.actions;

export default productSlice.reducer;
