// src/components/ScorePopup.js
import React from 'react';
import './ScorePopup.css';

const ScorePopup = ({ score, totalQuestions, onReset }) => {
  return (
    <div className="score-popup">
      <h3>Your Score</h3>
      <p>{score}/{totalQuestions}</p>
      <button onClick={onReset}>Try Again</button>
    </div>
  );
};

export default ScorePopup;
