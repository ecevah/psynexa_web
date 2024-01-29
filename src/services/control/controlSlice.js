"use client";
import { DASH_ARRAY } from "@/constant/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cartItems.splice(itemId, 1);
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { clearCard, removeItem, setToken } = controlSlice.actions;

export default controlSlice.reducer;
