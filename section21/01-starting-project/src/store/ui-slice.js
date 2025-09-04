import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { showCart: true };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
