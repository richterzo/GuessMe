// src/components/ScoreBoard.js
import React from 'react';
import './ScoreBoard.css';

function ScoreBoard({ team1Score, team2Score, currentTeam }) {
  return (
    <div className="scoreboard">
      <div className={`team team-red ${currentTeam === 'red' ? 'active' : ''}`}>
        
        Rosso: {team1Score}
      </div>
      <div className={`team team-blue ${currentTeam === 'blue' ? 'active' : ''}`}>
        Blu: {team2Score}
      </div>
    </div>
  );
}

export default ScoreBoard;
