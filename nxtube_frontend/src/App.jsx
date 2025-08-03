import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from './components/Feed'
import VideoPage from './components/VideoPage';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is already logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token && username) {
      setIsAuthenticated(true);
      setUser({ username, token });
    }
  }, []);

  const handleLoginSuccess = (token, username) => {
    setIsAuthenticated(true);
    setUser({ username, token });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUser(null);
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // Show main app if authenticated
  return (
    <>
      <Navbar onLogout={handleLogout} username={user?.username} />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="main-content" style={{ flex: 1 }}>
          <Router>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/video/:id" element={<VideoPage />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
