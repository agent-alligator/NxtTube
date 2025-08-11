import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchNotFound.css';

export default function SearchNotFound() {
  const navigate = useNavigate();

  return (
    <div className="snf-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="No result matches"
        className="snf-image"
      />
      <h2 className="snf-heading">No Search result found</h2>
      <p className="snf-text">Try different key words or remove search filter</p>
      <button className="snf-button" onClick={() => navigate('/')}>
        Retry
      </button>
    </div>
  );
}
