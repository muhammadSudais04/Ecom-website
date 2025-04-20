
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// AsyncThunk ek middleway hai jis se ham API fetch karsakte hain
export const fetchProducts = createAsyncThunk('fetch/fetchProducts', async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products; 
});

const fetchSlice = createSlice({
  name: 'fetch',
  initialState: {
    products: [],
    cart: [],
    loading: false,
    error: false,
  },

// extra reducers ek function hai jo ke apne parameter main builder leta hai jo ke pending/fulfilled/rejected task ko control karta hai
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {       //callback function lega
        state.loading = true;
        console.log("Data is Loading...");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {     
        state.loading = false;
        state.products = action.payload;    // fetchproducts main jo bhi return kia hai woh action.payload main aajata hai
        console.log("Data has been Loaded Successfully!");
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.error = action.error.message;
      });
  },
});

export const { addToCart } = fetchSlice.actions;
export default fetchSlice.reducer;