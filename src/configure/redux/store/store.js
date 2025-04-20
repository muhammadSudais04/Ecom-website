
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartSlice';

const store = configureStore({
  reducer: {
    fetch: fetchReducer, 
    cart : cartReducer
  },
});

export default store;