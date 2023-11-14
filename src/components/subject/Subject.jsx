import React, { useState } from "react";
import "./subject.scss";
import data from "./data.json";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";

const Subject = () => {
  // Extract all subjects from the data
  const navigate = useNavigate();

  const allSubjects = Object.keys(data)
    .filter((classKey) => classKey !== "All")
    .reduce((subjects, classKey) => {
      const subjectsInClass = Object.keys(data[classKey]).filter(
        (subject) => subject !== "All" && !subjects.includes(subject)
      );
      return subjects.concat(subjectsInClass);
    }, []);

  // State variables
  const classOptions = Object.keys(data);
  const [selectedClass, setSelectedClass] = useState(classOptions[0]);
  const [selectedSubject, setSelectedSubject] = useState("All");

  // Event handlers
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedSubject("All"); // Reset selectedSubject when class changes
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleSubjectSubsectionClick = (subject) => {
    // Combine the selectedClass and selectedSubject into the path
    const path = `detail/${selectedClass}/${subject}`;

    // Get the data for the clicked subsection
    const subsectionData = data[selectedClass][selectedSubject][subject];

    const subjectData = data[selectedClass][selectedSubject];

    // Use the navigate function with state to pass data to the detail page
    navigate(path, {
      state: {
        selectedClass,
        selectedSubject: subject,
        subsectionData,
        subjectData,
      },
    });
  };

  // Render functions
  const renderContent = () => {
    return <p>{renderSubjectContent(selectedClass, selectedSubject)}</p>;
  };

  const renderSubjectContent = (selectedClass, selectedSubject) => {
    const subjectData = data[selectedClass][selectedSubject];

    console.log(subjectData);
    if (typeof subjectData === "string") {
      return subjectData;
    } else if (typeof subjectData === "object") {
      // Check if there are subsections
      const subsections = Object.keys(subjectData);
      if (subsections.length === 0) {
        return "No content available for this subject";
      }

      // Render subsections
      return (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
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
        <h5>Filter Tutorial Class</h5>
        <select
          className="class-select"
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

      {/* Subject tabs */}
      <div className="tab-list">
        <button
          key="All"
          onClick={() => handleSubjectClick("All")}
          className={selectedSubject === "All" ? "active" : ""}
        >
          All
        </button>
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
