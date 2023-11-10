import React from "react";
import "./coursedetail.scss";
const CourseDetail = ({ heading1, detailData }) => {
  return (
    <div className="course-detail">
      <div className="course-img">
        {" "}
        <img src={detailData.image} alt="" />
      </div>
      <div className="content">
        <h2>{detailData.title}</h2>
        {detailData.courseLines.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default CourseDetail;
