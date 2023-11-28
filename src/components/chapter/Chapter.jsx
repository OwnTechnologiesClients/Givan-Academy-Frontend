import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./chapter.scss";
import data from "../subject/data2.json";
import chaptersData from "./chapter.json";

const Chapter = () => {
  const navigate = useNavigate();
  const location = useLocation();


  let selectedSubject1 = "";
  let selectedClass1 = "1";
  let open = false;
  if (location.state) {
    const { selectedSubject, selectedClass } = location.state;
    selectedSubject1 = selectedSubject;
    // selectedClass1 = selectedClass;
    open = true;
  }

  const navigateDetailsPage = (subject) => {
    const path = `detail/1/${subject}`;
    let selectedClass = "1";
    let selectedSubject = "All";
    const subsectionData = data[selectedClass][selectedSubject][subject];
    const subjectData = data[selectedClass][selectedSubject];

    navigate(path, {
      state: {
        selectedSubject: subject,
        subsectionData,
        subjectData,
      },
    });
  };

  return (
    <>
      <div className="chapter-section">
        {chaptersData?.[selectedSubject1]?.[selectedClass1].length>0 && (
          <div className="chapter-heading">
            <h2>All Chapters:</h2>
          </div>
        )}
        {open &&
          chaptersData?.[selectedSubject1]?.[selectedClass1].map((chapter) => (
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
    </>
  );
};

export default Chapter;
