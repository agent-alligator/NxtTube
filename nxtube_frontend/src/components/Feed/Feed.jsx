import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';
// import VideoCard from './VideoCard';

function Feed() {
  const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const username = localStorage.getItem('username');

//     fetch('http://127.0.0.1:8000/api/videos/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,  // <-- attach token here
//       }
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Unauthorized or bad request');
//         }
//         return res.json();
//       })
//       .then(data => setVideos(data))
//       .catch(err => {
//         console.error('Error loading videos:', err);
//       });
//   }, []);
  useEffect(() => {
    const token = localStorage.getItem('token');

    // If no token, don't attempt fetch
    if (!token) {
      console.error('No auth token found. Cannot fetch videos.');
      return;
    }

    // Use 'api-key' as the header key instead of 'Authorization'
    fetch('http://127.0.0.1:8000/home/videos/', {
      method: 'GET',
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          // Log the status for debugging (e.g., 401)
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
  

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <Link to={`/video/${video.id}`} state={{ video }} className="video-card" key={video.id}>
        <div>
          <img src={video.thumbnail} alt={video.title} />
          <div className="video-info">
            <h3>{video.title}</h3>
            <p>{video.channel_name}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
