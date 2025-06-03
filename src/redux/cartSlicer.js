import { createSlice } from '@reduxjs/toolkit';

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = createSlice({
   name: 'cart',
   initialState: {
      items: initialCart
   },
   reducers: {
      addToCart: (state, action) => {
         const cart = JSON.parse(localStorage.getItem('cart')) || [];
         const existingIndex = cart.findIndex((item) => item.id === action.payload.id);

         if (existingIndex !== -1) {
            cart[existingIndex].quantity += 1;
         } else {
            cart.push({ ...action.payload, quantity: 1 });
         }

         state.items = cart;
         localStorage.setItem('cart', JSON.stringify(cart));
      },

      removeFromCart: (state, action) => {
         state.items = state.items.filter((item) => item.id !== action.payload);
         localStorage.setItem('cart', JSON.stringify(state.items));
      },
      clearCart: (state) => {
         state.items = [];
         localStorage.setItem('cart', JSON.stringify([]));
      }
   }
});

export const { addToCart, removeFromCart, clearCart } = cartReducer.actions;
export default cartReducer.reducer;
