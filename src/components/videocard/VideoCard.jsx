import React from "react";
import "./videocard.scss";

const VideoCard = ({ videourls }) => {
  return (
    <div className="video-card">
      {videourls.map((url, index) => (
        <iframe
          key={index}
          src={url}
          title={`YouTube video player ${index}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
        ></iframe>
      ))}
    </div>
  );
};

export default VideoCard;
