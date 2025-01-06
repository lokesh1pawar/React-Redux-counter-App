import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    additem: (state, action) => state + action.payload,
    removeItem: (state, action) => state - action.payload,
    clearItem: () => 0,
  },
});

export const { additem, removeItem, clearItem } = counterSlice.actions;

export default counterSlice.reducer;
