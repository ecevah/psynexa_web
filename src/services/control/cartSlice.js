"use client";
import { DASH_ARRAY } from "@/constant/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: DASH_ARRAY,
  quantity: 0,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.cartItems.splice(itemId, 1);
    },
  },
});

export const { clearCard, removeItem } = cardSlice.actions;

console.log(cardSlice);

export default cardSlice.reducer;
