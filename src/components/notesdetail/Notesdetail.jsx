import React, { useState, useEffect } from "react";
import "./notesdetail.scss";
import CourseDetail from "../coursedetail/CourseDetail";
import CourseLinks from "../courselink/CourseLink";
import NotesPdf from "../notespdf/NotesPdf";

const Notesdetail = ({
  selectedClass,
  selectedSubject,
  subsectionData,
  subjectData,
}) => {
  const [activeLink, setActiveLink] = useState("Biology");

  const handleLinkClick = (link) => {
    console.log("Clicked link:", link);
    setActiveLink(link);
  };

  // useEffect(() => {
  //   // Do something with the updated activeLink, if needed
  //   console.log("Active Link Updated:", activeLink);
  // }, [activeLink]);

  return (
    <div>
      <div className="notes-detail-page">
        <div className="notes-detail-section">
          <CourseLinks
            sublinks={subsectionData?.sidelinks}
            activeLink={activeLink}
            selectedClass={selectedClass}
            handleLinkClick={handleLinkClick}
          />
         <div className="notes-detail-section-right-nav">
            <CourseDetail heading1={activeLink} detailData={subsectionData} />
            <div className="notes-idea">
              <h2 className="under-bar">Notes Idea</h2>
              <NotesPdf pdfurl={subsectionData?.pdf} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notesdetail;
