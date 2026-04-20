import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProductToCart } from "./cartApi";

export const addToCartAsync = createAsyncThunk(
  "/cart/addToCart",
  async (user) => {
    return await addProductToCart(user);
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addToCartAsync.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to add to cart";
      });
  },
});

export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
