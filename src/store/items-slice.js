import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    getItems(state, action) {
      return action.payload;
    },
  },
});

export const { getItems } = itemsSlice.actions;

export default itemsSlice;
