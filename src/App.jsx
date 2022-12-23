import React, { useState } from "react";
import './App.scss';
import Canvas from "./components/Canvas/Canvas";
import Toolbar from "./components/Toolbar/Toolbar";

const App = () => {

  const [mode, setMode] = useState('add');

  const getMode = (newMode) => {
    setMode(newMode);
  }

  return (
    <div className="app">
      <h1>Calculadora Trigonométrica</h1>
      <Toolbar getMode={getMode} />
      <Canvas mode={mode} />
    </div>
  )
}

export default App;