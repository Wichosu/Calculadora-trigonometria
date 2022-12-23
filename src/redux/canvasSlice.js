import { createSlice } from '@reduxjs/toolkit'

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    nodes: [{}]
  },
  reducers: {
    add: (state, action) => {
      const ctx = action.payload.canvasRef.current.getContext('2d');
      const rect = action.payload.canvasRef.current.getBoundingClientRect();

      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(action.payload.e.pageX - rect.x, action.payload.e.pageY - rect.y, 8, 0, 2 * Math.PI);
      ctx.fill()
      state.nodes.push({});
    }
  }
});

export const { add } = canvasSlice.actions;

export default canvasSlice.reducer;