import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { HiBars3 } from 'react-icons/hi2';

const Navbar = ({ onLogout, username }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        } else {
            // Fallback logout
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            window.location.href = '/';
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="app-logo"
                onClick={() => navigate('/')}
                >
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="NxTube"
                        className="logo-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    {/* <span className="logo-text">NxTube</span> */}
                </div>
            </div>

            <div className="navbar-right">
                <div className="profile-section">
                    <div className="profile-image">
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                            alt="Profile"
                            className="profile-avatar"
                        />
                        <HiBars3 className="profile-bars" aria-label="Menu" />
                    </div>
                    <button
                        className="logout-button"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    <FiLogOut
                        className='logout-icon'
                        onClick={handleLogout}
                        aria-label='Logout'
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleLogout()}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 