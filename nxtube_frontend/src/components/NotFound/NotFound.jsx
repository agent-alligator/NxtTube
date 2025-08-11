import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="nf-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="404 Not Found"
        className="nf-image"
      />
      <h1 className="nf-heading">404 - Page Not Found</h1>
      <p className="nf-text">Oops! The page you’re looking for doesn’t exist.</p>
      <button className="nf-button" onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  );
}
