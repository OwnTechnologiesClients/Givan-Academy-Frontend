import React, { useState } from "react";
import "./notesdetail.scss";
import CourseDetail from "../coursedetail/CourseDetail";
import CourseLinks from "../courselink/CourseLink";
import NotesPdf from "../notespdf/NotesPdf";

const Notesdetail = ({ selectedSubject, subsectionData, subjectData }) => {
  const [activeLink, setActiveLink] = useState("Physics");

  const handleLinkClick = (link) => {
    console.log("Clicked link:", link);
    setActiveLink(link);
  };

  return (
    <div>
      <div className="notes-detail-page">
        <div className="notes-detail-section">
          <CourseLinks
            sublinks={subsectionData.sidelinks}
            activeLink={activeLink}
            handleLinkClick={handleLinkClick}
          />
          <div className="notes-detail-section-right-nav">
            <CourseDetail heading1={activeLink} detailData={subsectionData} />
            <div className="notes-idea">
              <h2 className="under-bar">Notes Idea</h2>
              <NotesPdf pdfurl={subsectionData.pdf} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notesdetail;
