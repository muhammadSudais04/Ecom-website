
// src/configure/redux/reducers/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQ: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQ: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    addTotalPriceAndQuantity: (state) => {
      const total = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      state.totalPrice = total;
    },
  },
});

export const { addToCart, increaseQ, decreaseQ, addTotalPriceAndQuaintity } = cartSlice.actions;

export default cartSlice.reducer;