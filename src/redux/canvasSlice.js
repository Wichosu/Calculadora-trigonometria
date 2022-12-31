import { createSlice } from '@reduxjs/toolkit'

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    nodes: [],
    connections: []
  },
  reducers: {
    add: (state, action) => {
      state.nodes.push(action.payload);
    },
    connect: (state, action) => {
      state.connections.push(action.payload);
      alert(JSON.stringify(state.connections));
    }
  }
});

export const { add, connect } = canvasSlice.actions;

export default canvasSlice.reducer;