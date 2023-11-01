// src/components/GameBoard.js
import React, { useState } from 'react';
import Card from './Card';
import ScoreBoard from './ScoreBoard';
import './GameBoard.css';

function GameBoard({ words }) {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [currentTeam, setCurrentTeam] = useState('red');

  const handleFlip = () => {
    if (currentTeam === 'red') {
      setTeam1Score(prev => prev + 1);
    } else {
      setTeam2Score(prev => prev + 1);
    }
  };

  const handleSwitchTeam = () => {
    setCurrentTeam(currentTeam === 'red' ? 'blue' : 'red');
  };

  const switchToRedTeam = () => {
    setCurrentTeam('red');
  };

  const switchToBlueTeam = () => {
    setCurrentTeam('blue');
  };


  return (
        <div>
          <div className="cards-grid">
            {words.map((word, index) => (
              <Card key={index} word={word} onFlip={handleFlip} />
            ))}
          </div>
          <ScoreBoard team1Score={team1Score} team2Score={team2Score} currentTeam={currentTeam} />
          <div className="buttons">
            <button onClick={switchToRedTeam}>Switch to Red Team</button>
            <button onClick={switchToBlueTeam}>Switch to Blue Team</button>
          </div>
        </div>
  );
}

export default GameBoard;
