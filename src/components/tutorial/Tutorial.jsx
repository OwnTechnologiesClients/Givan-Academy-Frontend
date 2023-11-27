import React from "react";
import "./tutorials.scss";
import Banner from "../../assets/notes/banner.png";

const Tutorial = ({ hd1, hd3 }) => {
  return (
    <div className="tutorials-section">
      <div className="notes-pages">
        <div className="img-banner">
          <img src={Banner} alt="" />
        </div>
        <div className="notes-text-part">
          <h1>{hd1}</h1>
          <div className="homes-notes">
            <p>Homes</p>
            <div className="dot"></div>
            <p>{hd3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
