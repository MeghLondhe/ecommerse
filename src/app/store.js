import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/producstSlice";
import cartReducer from "../features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
