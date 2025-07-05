import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import axios from "axios";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      return data.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        {
          email,
          password,
          username,
        },
        {
          withCredentials: true,
        }
      );
      return data.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
export const checkAuthThunk = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/auth/is-auth`,
        {
          withCredentials: true,
        }
      );
      return data.user;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
