import React from "react";
import "./classes.scss";
import { Link } from "react-router-dom";
import Class from "../../assets/class.png";

const Classes = () => {
  const classCardDetails = [
    {
      key: "1",
      classImg: Class,
      classSection: "Class 1-5",
      classDetails: "Foundations of Learning: Classes for Grades 1 to 5",
      classButton: "view Details",
    },
    {
      key: "2",
      classImg: Class,
      classSection: "Class 6-9",
      classDetails: "Building the Future: Classes for Grades 6 to 9",
      classButton: "view Details",
    },
    {
      key: "3",
      classImg: Class,
      classSection: "Class 10-12",
      classDetails: "Preparing for Success: Classes for Grades 10 to 12",
      classButton: "view Details",
    },
    {
      key: "4",
      classImg: Class,
      classSection: "NCERT SOLUTIONS",
      classDetails: "Unlocking Knowledge: NCERT Solutions for Success",
      classButton: "view Details",
    },
  ];
  return (
    <div className="class">
      <div className="top-heading">
        <div></div>
        <div className="courses">
          <h4>DISCOVER COURSES</h4>
          <h1>Our Popular Classes</h1>
        </div>
        <Link to="/notes">
          <div className="button"> View All &gt;</div>
        </Link>
      </div>

      <div className="class-container">
        {classCardDetails.map((item) => (
          <div key={item.key}>
            <div className="card">
              <img src={item.classImg} alt="" />
              <div className="overshadow">
                <p>{item.classSection}</p>
              </div>
              <div className="text-part">
                <div className="detail">
                  <p>{item.classDetails}</p>
                  <Link to="/">
                    <div className="button">{item.classButton}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-section">
        <p>
          Enjoy the top notch learning methods and achieve next level skills!
          You are the creator of <br /> your own career & we will guide you
          through that. <span> Register Free Now!.</span>
        </p>
      </div>
    </div>
  );
};

export default Classes;
