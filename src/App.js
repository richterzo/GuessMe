import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  const words = [
    "Parola1", "Parola2", "Parola3", "Parola4",
    "Parola5", "Parola6", "Parola7", "Parola8",
    "Parola9", "Parola10", "Parola11", "Parola12",
    "Parola13", "Parola14", "Parola15", "Parola16"
  ];

  return (
    <div className="App">
      <GameBoard words={words} />
    </div>
  );
}

export default App;