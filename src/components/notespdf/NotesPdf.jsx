import React from "react";
import "./notespdf.scss";
import PDFIMG from "../../assets/pdfimg.png";
import { Link } from "react-router-dom";

const NotesPdf = () => {
  return (
    <div className="notes-pdf-container">
      <div className="head-notes">
        <Link to = "/">Click to download free sample note</Link>
      </div>
      <div className="notes-pdf-section">
        <img src={PDFIMG} alt="" />
      </div>

      <button>
        <Link to="/">Download the full note</Link>
      </button>
    </div>
  );
};

export default NotesPdf;
