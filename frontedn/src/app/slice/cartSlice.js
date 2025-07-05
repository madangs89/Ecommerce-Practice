import { createSlice } from "@reduxjs/toolkit";
import { addToCartThunk, getDataFromCart, updateQuantity } from "./thunk/cartThunk";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCartIfNotAuth: (state, action) => {
      const products = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      products.forEach((product) => {
        const existingItem = state.cart.find(
          (item) => item.productId === product.productId
        );

        if (existingItem) {
          existingItem.quantity += product.quantity || 1;
        } else {
          state.cart.push({
            productId: product.productId,
            title: product.title,
            image: product.images,
            price: product.price,
            quantity: product.quantity || 1,
          });
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const index = state.cart.findIndex(
        (item) => item.productId === productId
      );
      if (index !== -1) {
        state.cart[index].quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCartThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state) => {
        state.loading = false;
        localStorage.removeItem("cart");
      })
      .addCase(addToCartThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getDataFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataFromCart.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.items, "in slice");
        state.cart = action.payload.items;
        state.error = null;
      })
      .addCase(getDataFromCart.rejected, (state) => {
        state.loading = "Somthing went wrong";
      })
      .addCase(updateQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.items, "in slice");
        state.cart = action.payload.items;
        state.error = null;
      })
      .addCase(updateQuantity.rejected, (state) => {
        state.loading = "Somthing went wrong";
      })
  },
});

// Action creators are generated for each case reducer function
export const { addToCartIfNotAuth, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
