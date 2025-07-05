import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import axios from "axios";

export const getProductThunk = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product`
      );
      return data.products;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const getSingleProductThunk = createAsyncThunk(
  "product/getSingleProduct",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/product/${id}`
      );

      console.log(data.product, "in thunk");

      return data.product;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

