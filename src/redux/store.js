import { configureStore } from '@reduxjs/toolkit';
import { productByIdReducer, productReducer } from './reducers/productReducer';
import { categoryReducer } from './reducers/categoryReducer';
import cartReducer from './cartSlicer';

const store = configureStore({
   reducer: {
      products: productReducer,
      productById: productByIdReducer,
      categories: categoryReducer,
      cart: cartReducer
   }
});

export default store;
