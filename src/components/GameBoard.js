// src/components/GameBoard.js
import React, { useState, useEffect } from 'react';
import Card from './Card';
import ScoreBoard from './ScoreBoard';
import './GameBoard.css';

function GameBoard({ answers, questions }) { // Imposta lo stato iniziale del timer (5 minuti = 300 secondi)
  const [timeLeft, setTimeLeft] = useState(300);

  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    // Se il tempo è 0, interrompi il timer
    if (timeLeft === 0) {
      // Qui puoi gestire cosa succede quando il tempo scade
      setGameOver(true);
      console.log('Il tempo è scaduto!');
      return;
    }

    // Imposta un intervallo per decrementare il tempo rimanente
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Pulisci l'intervallo quando il componente viene smontato o quando il tempo si aggiorna
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Formatta il tempo rimanente in minuti e secondi
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [team3Score, setTeam3Score] = useState(0);
  const [team4Score, setTeam4Score] = useState(0);
  const [currentTeam, setCurrentTeam] = useState('red');

  const handleFlip = () => {
    if (currentTeam === 'red') {
      setTeam1Score(prev => prev + 1);
    }
    if (currentTeam === 'blue') {
        setTeam2Score(prev => prev + 1);
    } 
    if (currentTeam === 'green') {
        setTeam3Score(prev => prev + 1);
    }
  };

  const switchToRedTeam = () => {
    setCurrentTeam('red');
  };

  const switchToBlueTeam = () => {
    setCurrentTeam('blue');
  };


  const switchToGreenTeam = () => {
    setCurrentTeam('green');
  };


  const switchToYellowTeam = () => {
    setCurrentTeam('yellow');
  };


  return (
    <div className={`game game-container ${gameOver ? 'game-over' : ''}`}>
      {gameOver && <div className="game-over-message">GAME OVER</div>}
      <div className="game-layout">
     
    </div>
      {!gameOver && <><div className="cards-grid">   
      
      <div className="sidebar right">
        
      </div>   
        {questions.map((question, index) => (
          <Card
            key={index}
            answer={answers[index]} // assuming answers is an array corresponding to questions
            question={question}
            onFlip={() => handleFlip(index)} // assuming you want to pass the index to the handleFlip function
          />
        ))}
      </div>
      <div className="sidebar left">
      <div className="timer">{formatTime()}</div>
        <ScoreBoard team1Score={team1Score} team2Score={team2Score} team3Score={team3Score} currentTeam={currentTeam} />
        <div className="buttons">
          <button onClick={switchToRedTeam}>Rosso</button>
          <button onClick={switchToBlueTeam}>Blu</button>
          <button onClick={switchToGreenTeam}>Verde</button>
        </div>
      </div>
      
        </>
      }
      
    </div>
          
  );
}

export default GameBoard;
