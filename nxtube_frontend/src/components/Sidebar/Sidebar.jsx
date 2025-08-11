import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    const navigate = useNavigate();
    const handleSectionClick = (section) => {
        console.log(`Navigating to ${section}`);
        const pagMap = {
            home: '/',
            'trending-videos': '/trending-videos',
            'gaming-videos': '/gaming-videos',
            'saved-videos': '/saved-videos',
        };
        const url = pagMap[section] || '/';
        console.log(`Navigating to ${url}`);
        navigate(url);
    };


    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <ul className="section-list">
                    <li
                        className="section-item"
                        onClick={() => handleSectionClick('home')}
                    >
                        <span className="item-icon"><i className="fa fa-home"></i></span>
                        <span className="item-text">Home</span>
                    </li>
                    <li
                        className="section-item"
                        onClick={() => handleSectionClick('trending-videos')}
                    >
                        <span className="item-icon"><i className="fa fa-fire"></i></span>
                        <span className="item-text">Trending Videos</span>
                    </li>
                    <li
                        className="section-item"
                        onClick={() => handleSectionClick('gaming-videos')}
                    >
                        <span className="item-icon"><i className="fa fa-gamepad"></i></span>
                        <span className="item-text">Gaming Videos</span>
                    </li>
                    <li
                        className="section-item"
                        onClick={() => handleSectionClick('saved-videos')}
                    >
                        <span className="item-icon"><i className="fa fa-download"></i></span>
                        <span className="item-text">Saved Videos</span>
                    </li>
                </ul>
            </div>
            <div style={{ marginTop: 'auto', height: '190px', textAlign: 'left', borderLeft: '2.5px' }}>
                <div style={{ fontSize: 18, paddingLeft: '20px', fontWeight: 'bold', marginBottom: '5px' }}>
                    CONTACT US
                </div>

                <div className="social-media-icons">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook"
                        className="social-media-logo"
                    />
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter"
                        className="social-media-logo"
                    />
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in"
                        className="social-media-logo"
                    />
                </div>

                <div style={{ fontSize: 13, padding: '20px', paddingTop: '12px', lineHeight: 1.4 }}>
                    Enjoy! Now to see your channels and recommendations!
                </div>
            </div>
        </div>
    );
};

export default Sidebar; 