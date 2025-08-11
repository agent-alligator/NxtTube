import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Feed.css';
import { FaSearch } from 'react-icons/fa';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
// import VideoCard from './VideoCard';

function Feed() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No auth token found. Cannot fetch videos.');
      return;
    }

    fetch('http://10.10.26.244:8000/home/videos/', {
      method: 'GET',
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          console.error(`Fetch failed with status: ${res.status}`);
          throw new Error('Unauthorized or bad request');
        }
        return res.json();
      })
      .then(data => setVideos(data))
      .catch(err => {
        console.error('Error loading videos:', err);
      });
  }, []);

  const handleSearch = () => {
    navigate('/no-result-matched');
  };
  

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}><FaSearch color="#333" /></button>
      </div>
      <div className="video-grid">
        {videos.map((video) => (
          <Link to={`/video/${video.id}`} state={{ video }} className="video-card" key={video.id}>
          <div>
            <img src={video.thumbnail} alt={video.title} />
            <div className="video-info" style={{display: 'flex', justifyContent: 'flex-start'}}>
              <img
                  src="https://yt3.ggpht.com/ER0gWbyOw3zR4G-uGWplrTYY8P55jewfrf5n8VOBT_nDIVDcWq2f0a-a5GRHd9mBetRWe-ifsuA=s176-c-k-c0x00ffffff-no-rj-mo"
                  alt="Channel Logo"
                  className="channel-logo"
                  style={{width: '45px', height: '45px', marginLeft: '10px', marginTop: '10'}}
              />
              <div className='video-text-info'>
                <h3>{video.title}</h3>
                <p>{video.channel_name}</p>
                <p style={{paddingTop: '0px'}}>1.4k views . 2 years ago</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Feed;
