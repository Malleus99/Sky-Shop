import { configureStore } from '@reduxjs/toolkit';

import itemsSlice from './items-slice';
import authSlice from './auth-slice';
import { fetchItemsFromDatabase } from './items-actions';
import favoriteSlice from './favorites-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    auth: authSlice.reducer,
    favorites: favoriteSlice.reducer,
    cart: cartSlice.reducer,
  },
});

store.dispatch(fetchItemsFromDatabase());

export default store;
