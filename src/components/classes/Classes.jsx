import React from "react";
import img1 from "../../assets/class.png";
import "./classes.scss";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <div className="course-section">
      <div className="top-heading">
        <div></div>
        <div className="courses">
          <h4>DISCOVER COURSES</h4>
          <h1>Our Popular Classes</h1>
        </div>

        <Link to="/">
          <div className="button"> View All &gt;</div>
        </Link>
      </div>
      {/*<div className="card">
      //   <img src={img1} alt="" />
      //   <div className="over-shadow">
      //     <p>Class</p>
      //     <div className="details">
      //       <h2>Foundations of Learning: Classes for Grades 1 to 5</h2>
      //       <button>View</button>
      //     </div>
      //   </div>
  </div> */}
    </div>
  );
};

export default Classes;
