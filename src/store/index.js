import { configureStore } from '@reduxjs/toolkit';

import itemsSlice from './items-slice';
import { fetchItemsFromDatabase } from './items-actions';

const store = configureStore({
  reducer: { items: itemsSlice.reducer },
});

store.dispatch(fetchItemsFromDatabase());

export default store;
