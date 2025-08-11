import React, { createContext, useState } from 'react';

// 1️⃣ Create the context
export const VideoContext = createContext();

// 2️⃣ Create the provider component
export const VideoProvider = ({ children }) => {
  const [videoCache, setVideoCache] = useState({});
  const [videoReactions, setVideoReactions] = useState({});
  const [videoComments, setVideoComments] = useState({});

  return (
    <VideoContext.Provider value={{ 
        videoCache, setVideoCache,
        videoReactions, setVideoReactions,
        videoComments, setVideoComments
    }}>
      {children}
    </VideoContext.Provider>
  );
};
