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
      //create a single object with all information
      const connection = {
        name: action.payload[0].name + '-' + action.payload[1].name,
        value: 0,
        coordinates: [
          (action.payload[0].x + action.payload[1].x) / 2,
          (action.payload[0].y + action.payload[1].y) / 2
        ],
      };
      state.connections.push(connection);
    }
  }
});

export const { add, connect } = canvasSlice.actions;

export default canvasSlice.reducer;