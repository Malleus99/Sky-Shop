import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
    sectionData: [],
  },
  reducers: {
    fetchItems(state, action) {
      state.data = action.payload;
    },
    filterItems(state, action) {
      const { sex, discount } = action.payload;
      if (sex) {
        state.sectionData = state.data.filter(
          (item) => item.sexOrGroup === sex
        );
      }
      if (discount) {
        state.sectionData = state.data.filter((item) => item.discount > 0);
      }
    },
  },
});

export const { fetchItems, filterItems } = itemsSlice.actions;

export default itemsSlice;
