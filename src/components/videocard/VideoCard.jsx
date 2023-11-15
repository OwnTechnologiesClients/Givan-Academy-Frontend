import React from "react";
import "./videocard.scss";

const VideoCard = ({ videourls, style }) => {
  return (
    <div className="video-card">
      {videourls.map((url, index) => (
        <iframe 
        style={style}
          key={index}
          src={url}
          title={`YouTube video player ${index}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
        ></iframe>
      ))}
    </div>
  );
};

export default VideoCard;
