import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/producstSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
