import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

function VideoPage() {
  const location = useLocation();
  const { video } = location.state || {};  // read from router state
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleComment = () => {
    if (text.trim()) {
      setComments(prev => [...prev, text]);
      setText('');
    }
  };

  const handleLike = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(true);
    setLiked(false);
  };

  if (!video) return <div>Video data not found</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{video.title}</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FtSTIk28CP0?si=h5WgVTnMPliLLvGO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleLike} style={{ marginRight: '10px', background: liked ? 'green' : 'white' }}>Like</button>
        <button onClick={handleDislike} style={{ background: disliked ? 'red' : 'white' }}>Dislike</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Comments</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment"
        />
        <button onClick={handleComment}>Post</button>
        <ul>
          {comments.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VideoPage;
