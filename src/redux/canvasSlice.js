import { createSlice } from '@reduxjs/toolkit'

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    nodes: []
  },
  reducers: {
    add: (state, action) => {
      state.nodes.push(action.payload);
    },
    connect: (state, action) => {
      alert(JSON.stringify(state));
      console.log(JSON.stringify(action));
    }
  }
});

export const { add, connect } = canvasSlice.actions;

export default canvasSlice.reducer;