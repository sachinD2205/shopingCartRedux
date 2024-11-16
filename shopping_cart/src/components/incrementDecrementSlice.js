import { createSlice } from "@reduxjs/toolkit";

const incrementDecrementSlice = createSlice({
  name: "cart",
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
    clear: (state) => {
      state.value = 0;
    },
  },
});
export const { add, decrement, increment, clear } =
  incrementDecrementSlice.actions;
export default incrementDecrementSlice.reducer;
