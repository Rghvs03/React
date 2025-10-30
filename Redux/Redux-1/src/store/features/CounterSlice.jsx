// Only number-related code
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addnumber: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, addnumber } = counterSlice.actions;
export default counterSlice.reducer;
