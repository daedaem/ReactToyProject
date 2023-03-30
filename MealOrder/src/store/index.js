import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const reducers = combineReducers({
  cart: cartSlice.reducer,
  ui: uiSlice.reducer,
});
const store = configureStore({
  reducer: reducers,
  // reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});

export default store;
