import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk, getSingleProductThunk } from "./thunk/productThunk";

const initialState = {
  products: [],
  feauturedProudcts: [],
  latestProducts: [],
  loading: false,
  error: null,
  selectedProduct: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // dispatch(checkAuthThunk())
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.feauturedProudcts = action.payload.filter((p) => p.isFeatured);
        state.latestProducts = action.payload.splice(0, 10);
      })
      // dispatch(checkAuthThunk())
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // dispatch(checkAuthThunk())
      .addCase(getSingleProductThunk.fulfilled, (state, action) => {
        console.log(action.payload, "in slice");
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      // dispatch(checkAuthThunk())
      .addCase(getSingleProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const productReducer = productSlice.reducer;
