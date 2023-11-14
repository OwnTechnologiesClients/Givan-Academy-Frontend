import React, { useState } from "react";
import "./customtabs.scss"; // Updated import
import VideoCard from "../videocard/VideoCard";
import VideoSection from "../videosection/VideoSection";
import data from "./Data.json";

const CustomTabs = () => { 
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const allVideosLink = data.allVideos.map((video) => video.link);
  const shortsLink = data.shorts.map((short) => short.link);

  const initialTabs = [
    {
      label: "All Videos",
      content: <VideoCard videourls={allVideosLink} />,
    },
    {
      label: "Shorts",
      content: <VideoCard videourls={shortsLink} />,
    },
    {
      label: "Tutorials",
      content: <VideoSection />,
    },
  ];

  return (
    <div className="customTabs"> {/* Updated class name */}
      <div>
        {initialTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${index === activeTab ? "actives" : "inactives"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="contents">{initialTabs[activeTab].content}</div>
    </div>
  );
};

export default CustomTabs; // Updated export
