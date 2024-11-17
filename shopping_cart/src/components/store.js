import { configureStore } from "@reduxjs/toolkit";
import incrementDecrementSlice from "./incrementDecrementSlice";
import cartSlice from "./cartSlice";
import toDoSlice from "./toDoSice";

const store = configureStore({
  reducer: {
    counter: incrementDecrementSlice,
    cart: cartSlice,
    todo: toDoSlice,
  },
});

export default store;
