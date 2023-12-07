import React, { useState } from "react";
import "./videosection.scss";
import data from "../subject/data.json";
import Card from "../card/Card";
import chaptersData from "../chapter/chapter.json";
import topicData from "../chapter/topicData.json";

const VideoSection = () => {
  const classOptions = Object.keys(data);
  const [selectedClass, setSelectedClass] = useState(classOptions[0]);
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedName, setSelectedName] = useState("");
  const [selectTopic, setSelectTopic] = useState("");

  const allSubjects = Object.keys(data[selectedClass]);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSubject("All");
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedName("");
    setSelectTopic("");
  };

  const handleSubjectSubsectionClick = (subject) => {
    setSelectedName(subject);
    setSelectTopic("");
  };

  const renderContent2 = () => {
    return <p>{renderSubjectContent2(selectedClass, selectedSubject)}</p>;
  };

  const renderSubjectContent2 = (selectedClass, selectedSubject) => {
    const subjectData = data[selectedClass][selectedSubject];

    if (typeof subjectData === "string") {
      return subjectData;
    } else if (typeof subjectData === "object") {
      const subsections = Object.keys(subjectData);
      if (subsections.length === 0) {
        return "No content available for this subject";
      }

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

      subsections = [];
      subsections.push(selectedName);
      if (selectedName === "") {
        subsections = [];
      }
      // console.log(topicData?.[selectTopic].videoLinks)
      return (
        // <div
        //   style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        //   className="subject-card-map"
        // >
        //   {subsections.map((subsection, index) => (
        //     <div
        //       key={index}
        //       style={{
        //         display: "flex",
        //         flexWrap: "wrap",
        //         marginRight: "2vw",
        //         marginBottom: "2vw",
        //       }}
        //     >
        //       <iframe
        //         src={subjectData[subsection].videolink}
        //         title="YouTube video player"
        //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //         allowFullScreen
        //       ></iframe>
        //     </div>
        //   ))}
        // </div>
        topicData?.[selectTopic] && (<iframe
          src={topicData?.[selectTopic].videoLinks}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>)
        
        // <div>Hello</div>
      );
    }
  };

  const navigateDetailsPage = (topic) => {
    setSelectTopic(topic);
  }

  return (
    <div className="subject-container">
      <div className="subject-tutorial">
        <h5
          style={{ display: "flex", alignItems: "baseline", fontSize: "1rem" }}
        >
          Filter Tutorial Class
        </h5>
        <select
          className="class-select"
          style={{
            display: "flex",
            alignItems: "baseline",
            height: "45px",
            width: "85px",
            fontSize: "20px",
          }}
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

      <div className="chapter-section">
        {chaptersData?.[selectedName]?.[selectedClass].length > 0 && (
          <div className="chapter-heading">
            <h2>All Chapters:</h2>
          </div>
        )}
        {
          chaptersData?.[selectedName]?.[selectedClass].map((chapter) => (
            <div key={chapter.id}>
              <div className="chapter-name">
                <h3>{chapter.title}</h3>
              </div>

              <div className="chapter-topic">
                <ul>
                  {chapter.topics.map((topic, topicIndex) => (
                    <li
                      onClick={() => navigateDetailsPage(topic)}
                      key={topicIndex}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>

      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default VideoSection;
