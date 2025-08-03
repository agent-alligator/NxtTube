import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const handleSectionClick = (section) => {
        console.log(`Navigating to ${section}`);
        // You can add navigation logic here later
    };

    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <ul className="section-list">
                    <li
                        className="section-item"
                        onClick={() => handleSectionClick('home')}
                    >
                        <span className="item-icon">🏠</span>
                        <span className="item-text">Home</span>
                    </li>
                    <li
                        className="section-item"
                        onClick={() => handleSectionClick('trending-videos')}
                    >
                        <span className="item-icon">🔥</span>
                        <span className="item-text">Trending Videos</span>
                    </li>
                    <li
                        className="section-item"
                        onClick={() => handleSectionClick('gaming-videos')}
                    >
                        <span className="item-icon">🎮</span>
                        <span className="item-text">Gaming Videos</span>
                    </li>
                    <li
                        className="section-item"
                        onClick={() => handleSectionClick('saved-videos')}
                    >
                        <span className="item-icon">💾</span>
                        <span className="item-text">Saved Videos</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar; 