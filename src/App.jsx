import React from "react";
import './App.scss';
import Toolbar from "./components/Toolbar/Toolbar";

const App = () => {
  return (
    <div className="app">
      <h1>Calculadora Trigonométrica</h1>
      <Toolbar />
    </div>
  )
}

export default App;