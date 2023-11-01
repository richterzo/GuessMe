// src/components/Card.js
import React, { useState } from 'react';
import './Card.css';

function Card({ word, onFlip }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      onFlip();
    }
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{word}</div>
      </div>
    </div>
  );
}

export default Card;
