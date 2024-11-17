import { configureStore } from "@reduxjs/toolkit";
import incrementDecrementSlice from "./incrementDecrementSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    counter: incrementDecrementSlice,
    cart: cartSlice,
  },
});

export default store;
