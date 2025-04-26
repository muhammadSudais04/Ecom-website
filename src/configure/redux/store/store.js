
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartSlice';
import fetchReducer from '../reducers/fetchSlice';

const store = configureStore({
  reducer: {
    fetch: fetchReducer, 
    cart : cartReducer
  },
});

export default store;