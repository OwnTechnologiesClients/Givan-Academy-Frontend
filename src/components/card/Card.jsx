import React from "react";
import "./card.scss";

const Card = ({ standard, subject , onClick}) => {
  return (
    <div className="card-container-1">
      <div
        style={{
          height: "14vw",
          width: " 250px",
        }}
        className="card-container-section" onClick={onClick}>
        <p>Class {standard}</p>
        <h4>{subject}</h4>
      </div>
    </div>
  );
};

export default Card;