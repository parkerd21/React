import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../store/ui-slice";
import cartReducer from "../store/cart-slice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
