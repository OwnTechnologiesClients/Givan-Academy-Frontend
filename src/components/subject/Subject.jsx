import React, { useState } from "react";
import "./subject.scss";
import data from "./data.json";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";

const Subject = () => {
  const navigate = useNavigate();

  const classOptions = Object.keys(data);
  const [selectedClass, setSelectedClass] = useState(classOptions[0]);
  const [selectedSubject, setSelectedSubject] = useState("All");

  const allSubjects = Object.keys(data[selectedClass]);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSubject("All");
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleSubjectSubsectionClick = (subject) => {
    const subsectionData = data[selectedClass][selectedSubject][subject];
    const subjectData = data[selectedClass][selectedSubject];

    navigate("/notes", {
      state: {
        selectedSubject: subject,
        selectedClass,
        subsectionData,
        subjectData,
      },
    });
  };

  const renderContent = () => {
    return <p>{renderSubjectContent(selectedClass, selectedSubject)}</p>;
  };

  const renderSubjectContent = (selectedClass, selectedSubject) => {
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

  return (
    <div className="subject-container">

      {/* Filter Tutorial Class */}
      <div className="subject-tutorial">
        <h5
          style={{
            fontSize: "1rem",
          }}
        >
          Filter Tutorial Class
        </h5>
        <select
          style={{
            height: "40px",
            width: "105px",
            fontSize: "15px",
          }}
          className="class-select"
          value={selectedClass}
          onChange={handleClassChange}
        >
          {classOptions.map((classOption) => (
            <option
              key={classOption}
              value={classOption}
              style={{
                fontSize: "20px",
              }}
            >
              {classOption}
            </option>
          ))}
        </select>
      </div>

      {/* Subject tabs */}
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

      {/* Tab content */}
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Subject;
