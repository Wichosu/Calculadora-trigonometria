import React, { useState } from "react";
import './App.scss';
import Canvas from "./components/Canvas/Canvas";
import Results from "./components/Results/Results";
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
      <Results />
    </div>
  )
}

export default App;