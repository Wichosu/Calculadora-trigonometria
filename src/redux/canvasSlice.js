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
      //Filter connections
      state.nodes.map((node) => {
        if(node.name === action.payload[0].name){
          node.connections.push({...action.payload[1], value: 0});
        }
      })
      alert(JSON.stringify(state.nodes));
    }
  }
});

export const { add, connect } = canvasSlice.actions;

export default canvasSlice.reducer;