import { createSlice } from "@reduxjs/toolkit";
import {  checkAuthThunk, loginThunk, registerThunk } from "./thunk/authThunk";

const initialState = {
  isAuthenticated: false,
  userId: null,
  username: null,
  email: null,
  role: "user",
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.userId = null;
        state.username = null;
        state.email = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {

        state.isAuthenticated = true;
        state.userId = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.loading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.userId = null;
        state.username = null;
        state.email = null;
        state.loading = false;
      })
      .addCase(registerThunk.pending, (state, action) => {
        state.loading = true;
        state.isAuthenticated = false;
        state.userId = null;
        state.username = null;
        state.email = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {

        state.isAuthenticated = true;
        state.userId = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.loading = false;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.userId = null;
        state.username = null;
        state.email = null;
        state.loading = false;
      })
      .addCase(checkAuthThunk.pending, (state, action) => {
          state.loading = true;
        state.isAuthenticated = false;
        state.userId = null;
        state.username = null;
        state.email = null;
      })
      .addCase(checkAuthThunk.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.userId = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.loading = false;
      })
      .addCase(checkAuthThunk.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.userId = null;
        state.username = null;
        state.email = null;
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const authReducer = authSlice.reducer;
