import React, { useState } from "react";
import "./notesdetail.scss";
import CourseDetail from "../coursedetail/CourseDetail";
import CourseLinks from "../courselink/CourseLink";
import TestSeriesData from "./TestSeriesData.json";
import NotesPdf from "../notespdf/NotesPdf";

const Notesdetail = ({
  selectedClass,
  selectedSubject,
  subsectionData,
  subjectData,
}) => {
  const [activeLink, setActiveLink] = useState("Hindi note description");

  const pdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const handleLinkClick = (link) => {
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
              <NotesPdf />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notesdetail;
