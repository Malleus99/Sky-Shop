import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: { items: [] },
  reducers: {
    toggleFavorite(state, action) {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items.push({ id });
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice;
