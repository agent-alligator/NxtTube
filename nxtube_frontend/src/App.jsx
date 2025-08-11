import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from './components/Feed'
import VideoPage from './components/VideoPage';
import NotFound from './components/NotFound/NotFound';
import SearchNotFound from './components/NotFound/SearchNotFound'
import Banner from './components/Banner/Banner'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

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
    <div style={{ fontFamily: 'Roboto' }}>
      <Navbar onLogout={handleLogout} username={user?.username} />
      <div style={{ display: 'flex' }}>
        <Sidebar className="side-bar"/>

        <div className="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showBanner && <Banner setShowBanner={setShowBanner} />}
                  <Feed />
                </>
              }
            />
            <Route path="/trending-videos" element={<NotFound />} />
            <Route path="/gaming-videos" element={<NotFound />} />
            <Route path="/saved-videos" element={<NotFound />} />
            <Route path="/no-result-matched" element={<SearchNotFound />} />
            <Route path="/video/:id" element={<VideoPage />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
          {/* </Router> */}
        </div>
      </div>
    </div>
  )
}

export default App
