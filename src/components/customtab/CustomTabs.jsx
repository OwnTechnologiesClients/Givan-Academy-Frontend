import React, { useState } from "react";
import VideoCard from "../videocard/VideoCard";
import VideoSection from "../videosection/VideoSection";
import "./customtab.scss";
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
      content: (
        <VideoCard
          videourls={shortsLink}
          style={{  width: "170px" , height: "300px" }}
        />
      ),
    },
    {
      label: "Tutorials",
      content: <VideoSection />,
    },
  ];

  return (
    <div style={{ backgroundColor: "#FAF8F9" }}>
      <div
        style={{
          marginTop: "4vw",
          textAlign: "center",
        }}
      >
        <div class="buttons-containers">
          {initialTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              class={`buttons ${index === activeTab ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "20px" }}>
          {initialTabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default CustomTabs; // Updated export
