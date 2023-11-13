import React, { useEffect } from "react";
import "./notespdf.scss";
import { useNavigate } from "react-router-dom";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const NotesPdf = ({ pdfurl }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleDownloadClick = () => {
  
      const link = document.createElement("a");
      link.href = pdfurl;
      

      link.download = "sample_pdf.pdf";

    
      document.body.appendChild(link);

    
      link.click();

     
      document.body.removeChild(link);
    };


    const pTag = document.querySelector(".head-notes p");
    pTag.addEventListener("click", handleDownloadClick);

    return () => {
      pTag.removeEventListener("click", handleDownloadClick);
    };
  }, [pdfurl]);

  return (
    <div className="notes-pdf-container">
      <div className="head-notes">
        <p>Click to download free sample note</p>
      </div>
      <div className="notes-pdf-section">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div
            style={{
              border: "1px solid #ccc",
              height: "750px",
            }}
          >
            <Viewer fileUrl={pdfurl} />
          </div>
        </Worker>
      </div>

      <button onClick={() => navigate("payment")}>
      Download the full note
    </button>
    </div>
  );
};

export default NotesPdf;
