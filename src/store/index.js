import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './items-slice';
import { fetchItems } from './items-actions';

const store = configureStore({
  reducer: { items: itemsSlice.reducer },
});

store.dispatch(fetchItems());

export default store;
