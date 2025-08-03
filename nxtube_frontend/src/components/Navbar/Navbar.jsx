import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogout, username }) => {
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
                <div className="app-logo">
                    <img
                        src="/nxtube-logo.png"
                        alt="NxTube"
                        className="logo-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="logo-text">NxTube</span>
                </div>
            </div>

            <div className="navbar-right">
                <div className="profile-section">
                    <div className="profile-image">
                        <img
                            src="https://via.placeholder.com/40x40/007bff/ffffff?text=U"
                            alt="Profile"
                            className="profile-avatar"
                        />
                    </div>
                    {username && <span className="username">{username}</span>}
                    <button
                        className="logout-button"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 