import React, { useState } from "react";
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
   <div style={{  backgroundColor: "#FAF8F9",}}>
   <div
   style={{
     marginTop: "4vw",
     textAlign: "center",
   
   }}
 >
   <div>
     {initialTabs.map((tab, index) => (
       <button
         key={index}
         onClick={() => handleTabClick(index)}
         style={{
           padding: "1.2vw",
           width: "15%",
           cursor: "pointer",
           border: "1px solid #2D6AA2",
           fontFamily: '"Poppins", sans-serif',
           fontWeight: 700,
           fontSize: "0.9vw",
           transition: "background-color 0.3s",
           borderTopLeftRadius: index === 0 ? "50px" : "0",
           borderBottomLeftRadius: index === 0 ? "50px" : "0",
           borderTopRightRadius:
             index === initialTabs.length - 1 ? "50px" : "0",
           borderBottomRightRadius:
             index === initialTabs.length - 1 ? "50px" : "0",
           backgroundColor: index === activeTab ? "#2D6AA2" : "white",
           color: index === activeTab ? "white" : "black",
         }}
       >
         {tab.label}
       </button>
     ))}
   </div>
   <div style={{ marginTop: "20px" }}>{initialTabs[activeTab].content}</div>
 </div>
   </div>
  );
};

export default CustomTabs; // Updated export
