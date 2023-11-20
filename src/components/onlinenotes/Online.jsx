import React from "react";
import "./online.scss";
import Class from "../../assets/class.png";
import { Link } from "react-router-dom";
const Online = () => {
  const classCardDetails = [
    {
      key: "1",
      classImg: Class,
      classSection: "Class 1-5",
      classDetails: "Foundations of Learning: Classes for Grades 1 to 5",
      classButton: "View Details",
    },
    {
      key: "2",
      classImg: Class,
      classSection: "Class 6-9",
      classDetails: "Building the Future: Classes for Grades 6 to 9",
      classButton: "View Details",
    },
    {
      key: "3",
      classImg: Class,
      classSection: "Class 10-12",
      classDetails: "Preparing for Success: Classes for Grades 10 to 12",
      classButton: "View Details",
    },
    {
      key: "4",
      classImg: Class,
      classSection: "NCERT SOLUTIONS",
      classDetails: "Unlocking Knowledge: NCERT Solutions for Success",
      classButton: "View Details",
    },
  ];
  return (
    <div className="course-sections">
      <div className="top-heading">
        <div></div>
        <div className="courses">
          <h4>Popular Notes</h4>
          <h1>Our Best Online Notes</h1>
        </div>

        <Link to="/">
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
          You are the creator of
        </p>
        <p>
          your own career & we will guide you through that.{" "}
          <Link to="/apply">
          
            <span> Register Free Now!.</span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Online;
