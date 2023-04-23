import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "data",
  initialState: {
    counter: 1,
    data: 4,
  },
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

export const { increment, decrement } = counter.actions;

export default counter.reducer;
