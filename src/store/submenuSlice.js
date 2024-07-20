import { createSlice } from '@reduxjs/toolkit';

export const submenuSlice = createSlice({
  name: 'submenu',
  initialState: {
    content: []
  },
  reducers: {
    setSubmenuContent: (state, action) => {
      state.content = action.payload;
    }
  }
});

export const { setSubmenuContent } = submenuSlice.actions;

export default submenuSlice.reducer;
