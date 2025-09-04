import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../store/ui-slice";

const store = configureStore({
  reducer: {ui: uiReducer},
});

export default store;
