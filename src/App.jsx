import React from "react";
import './App.scss';
import Canvas from "./components/Canvas/Canvas";
import Toolbar from "./components/Toolbar/Toolbar";

const App = () => {
  return (
    <div className="app">
      <h1>Calculadora Trigonométrica</h1>
      <Toolbar />
      <Canvas />
    </div>
  )
}

export default App;