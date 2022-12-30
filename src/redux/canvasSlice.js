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
      state.nodes.map((node) => {
        if(node.name === action.payload[0].name){
          node.connections.push({...action.payload[1], value: 0});
        } else if(node.name === action.payload[1].name){
          node.connections.push({...action.payload[0], value: 0});
        }
      })
    }
  }
});

export const { add, connect } = canvasSlice.actions;

export default canvasSlice.reducer;