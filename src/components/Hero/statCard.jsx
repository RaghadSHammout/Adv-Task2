import React from 'react';
import './StatCard.css';

const StatCard = ({ number, text }) => {
  return (
    <div className="stat-card">
      <span className="stat-card-number">{number}</span>
      <span className="stat-card-text">{text}</span>
    </div>
  );
};

export default StatCard;
