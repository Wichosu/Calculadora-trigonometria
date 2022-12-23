import { configureStore } from "@reduxjs/toolkit";
import canvasSlice from "./canvasSlice";

export default configureStore({
  reducer: {
    canvas: canvasSlice
  }
});