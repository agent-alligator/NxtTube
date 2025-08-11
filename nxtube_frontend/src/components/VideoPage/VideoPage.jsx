import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { VideoContext } from '../../contexts/VideoContext';
import './VideoPage.css'
import { PiFloppyDiskBold } from "react-icons/pi";
import { BiLike,BiDislike } from "react-icons/bi";
import  ChannelInfo from "../ChannelInfo/ChannelInfo"

function VideoPage() {
  const { id: videoId } = useParams(); 
  const [text, setText] = useState('');
  const {
    videoCache, setVideoCache,
    videoReactions, setVideoReactions,
    videoComments, setVideoComments
  } = useContext(VideoContext);

  const { liked = false, disliked = false } = videoReactions[videoId] || {};
  // const comments = videoComments[videoId] || [];
  const [video, setVideo] = useState(null);

  useEffect(()=>{
    const saved=localStorage.getItem('videoReactions');
    if(saved){
      try{
        const parsed=JSON.parse(saved);
        setVideoReactions(prev=>({ ...prev, ...parsed}));
      } catch(e){
        console.error('Failed to parse saved reactions', e);
      }
    }
  }, [setVideoReactions])

  useEffect(()=>{
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No auth token found. Cannot fetch videos.');
      return;
    }

    if (videoCache[videoId]) {
      setVideo(videoCache[videoId]);
      console.log('videoCache', videoCache);
    } else {
      fetch(`http://10.10.26.244:8000/home/videos/${videoId}`, {
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
        .then(data => {
          setVideo(data);
          setVideoCache(prev => ({ ...prev, [videoId]: data }));
        })
        .catch(err => {
          console.error('Error loading video:', err);
        });
    }
  },[videoId, videoCache])
  
  // const handleComment = () => {
  //   if (text.trim()) {
  //     setVideoComments(prev => ({
  //       ...prev,
  //       [videoId]: [...(prev[videoId] || []), text]
  //     }));
  //     setText('');
  //   }
  // };

  const persistReactions = (updater) => {
    setVideoReactions(prev => {
      const updated = typeof updater === 'function' ? updater(prev) : updater;
      localStorage.setItem('videoReactions', JSON.stringify(updated));
      return updated;
    });
  };

  const handleLike = () => {
    persistReactions(prev => {
      const current = prev[videoId] || { liked: false, disliked: false };
      const next = current.liked
        ? { liked: false, disliked: false }
        : { liked: true, disliked: false };
      return { ...prev, [videoId]: next };
    });
  };

  const handleDislike = () => {
    persistReactions(prev => {
      const current = prev[videoId] || { liked: false, disliked: false };
      const next = current.disliked
        ? { liked: false, disliked: false }
        : { liked: false, disliked: true };
      return { ...prev, [videoId]: next };
    });
  };


  if (!video) return <div>Video data not found</div>;

  return (
    <div style={{ padding: '10px', fontFamily: 'Roboto'}}>
      <div className="video-player">
        <iframe width="100%" height="560" src={video.video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <h2 className="video-title" >{video.title}</h2>
      <div className="video-info">
        <p style={{paddingTop: '9px'}}>1.4k views . 2 years ago</p>
        <div className="video-reactions" style={{ marginTop: '10px', textAlign: 'right' }}>
        <PiFloppyDiskBold size={22}/>
          <BiDislike
            size={22}
            onClick={handleDislike}
            className={`reaction-icon ${disliked ? 'active' : ''}`}
          />
          <BiLike
            size={22}
            onClick={handleLike}
            className={`reaction-icon ${liked ? 'active' : ''}`}
          />
        </div>
      </div>
      <hr style={{ height: '1.5px', backgroundColor: '#909090', border: 'none' }}></hr>
      <ChannelInfo/>
      <div style={{textAlign: 'left', paddingLeft: '60px'}}>{video.description}</div>
    </div>
  );
}

export default VideoPage;
