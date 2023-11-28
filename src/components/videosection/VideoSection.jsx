import React, { useState } from "react";
import VideoCard from "../videocard/VideoCard";
import { useNavigate } from "react-router-dom";
import "./videosection.scss";
import data from "../subject/data.json";
import Card from "../card/Card";

const VideoSection = () => {
  const navigate = useNavigate();

  const classOptions = Object.keys(data);
  const [selectedClass, setSelectedClass] = useState(classOptions[0]);
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedName, setSelectedName] = useState("");

  const allSubjects = Object.keys(data[selectedClass]);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSubject("All"); 
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedName("");
  };

  const handleSubjectSubsectionClick = (subject) => {
    setSelectedName(subject);
  };

  const renderContent2 = () => {
    return <p>{renderSubjectContent2(selectedClass, selectedSubject)}</p>;
  };

  const renderSubjectContent2 = (selectedClass, selectedSubject) => {
    const subjectData = data[selectedClass][selectedSubject];
    console.log(subjectData);

    if (typeof subjectData === "string") {
      return subjectData;
    } 
    else if (typeof subjectData === "object") {
      const subsections = Object.keys(subjectData);
      if (subsections.length === 0) {
        return "No content available for this subject";
      }
      console.log(subsections)

      return (
        <div
          style={{ display: "flex", flexWrap: "wrap" }}
          className="subject-card-map"
        >
          {subsections.map((subsection) => (
            <Card
              standard={selectedClass}
              subject={subsection}
              onClick={handleSubjectSubsectionClick}
            />
          ))}
        </div>
      );
    }
  };

  const renderContent = () => {
    return <p>{renderSubjectContent(selectedClass, selectedSubject)}</p>;
  };

  const renderSubjectContent = (selectedClass, selectedSubject) => {
    const subjectData = data[selectedClass][selectedSubject];

    if (typeof subjectData === "string") {
      return subjectData;
    } else if (typeof subjectData === "object") {
      let subsections = Object.keys(subjectData);
      if (subsections.length === 0) {
        return "No content available for this subject";
      }

      const videoLinks = subsections.map(
        (subsection) => subjectData[subsection].videolink
      );

      subsections = [];
      subsections.push(selectedName);
      if(selectedName === "") {
        subsections = [];
      }
      return (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          className="subject-card-map"
        >
          {subsections.map((subsection, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginRight: "2vw",
                marginBottom: "2vw",
              }}
            >
              <iframe
               
                src={subjectData[subsection].videolink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="subject-container">
      <div className="subject-tutorial">
        <h5 style={{ display: "flex", alignItems: "baseline" , fontSize: "1rem" }}>
          Filter Tutorial Class
        </h5>
        <select
          className="class-select"
          style={{ display: "flex", alignItems: "baseline" , height: "45px",
          width: "85px",
          fontSize: "20px" }}
          value={selectedClass}
          onChange={handleClassChange}
        >
          {classOptions.map((classOption) => (
            <option key={classOption} value={classOption}>
              {classOption}
            </option>
          ))}
        </select>
      </div>

      <div className="tab-list">
        {allSubjects.map((subject) => (
          <button
            key={subject}
            onClick={() => handleSubjectClick(subject)}
            className={selectedSubject === subject ? "active" : ""}
          >
            {subject}
          </button>
        ))}
      </div>

      <div className="tab-content">{renderContent2()}</div>

      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default VideoSection;
