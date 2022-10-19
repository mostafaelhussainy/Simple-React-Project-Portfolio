import { configureStore, createReducer } from '@reduxjs/toolkit';
import counterReducer from './count';
import cart from './cart';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cart,
  },
})