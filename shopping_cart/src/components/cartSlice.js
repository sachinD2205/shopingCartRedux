import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: ["ganesh", "ravi", "tejas"],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      let filteredItemss = state.item.filter((d) => d != action.payload);
      console.log("dddddd", filteredItemss, state.item);
      state.item = filteredItemss;
    },
    clearAllItems: (state) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;
