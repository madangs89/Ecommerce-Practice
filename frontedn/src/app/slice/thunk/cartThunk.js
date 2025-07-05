import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async ({ product }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart`,
        {
          product,
        },
        {
          withCredentials: true,
        }
      );
      console.log(data.cart);
      return data.cart;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const getDataFromCart = createAsyncThunk(
  "cart/getDataFromCart",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/cart`,
        {
          withCredentials: true,
        }
      );
      console.log(data.cart);
      return data.cart;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const updateQuantity = createAsyncThunk(
  "product/updateQuantity",
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/cart`,
        {
          productId,
          quantity,
        },
        {
          withCredentials: true,
        }
      );

      console.log(data.product, "in thunk");
      console.log(data.cart);
      return data.cart;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
