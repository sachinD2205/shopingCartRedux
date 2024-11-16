import { configureStore } from "@reduxjs/toolkit";
import incrementDecrementSlice from "./incrementDecrementSlice";

const store = configureStore({
  reducer: {
    counter: incrementDecrementSlice,
  },
});

export default store;
