import React from "react";
import "./instructors.scss";
import IMG1 from "../../assets/3.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/1.png";
import { Link } from "react-router-dom";

const Instructors = () => {
  return (
    <div className="instructor-section">
      <div className="text-section">
        <div></div>
        <div className="instructor-head">
   
          <h5>MAKE CONNECTIONS</h5>
          <h1>Team of Instructors</h1>
        </div>

        <Link to="/aboutus">
          <div className="button"> View All &gt;</div>
        </Link>
      </div>

      <div className="img-section">
        <Link to="/">
          <div className="content-part-1">
            <div className="border-line">
              <img src={IMG1} alt="" />
            </div>
            <div className="name">Female Name</div>
            <div className="post">Director</div>
          </div>
        </Link>
        <Link to="/">
          <div className="content-part-2">
            <div className="border-line">
              <img src={IMG2} alt="" />
            </div>
            <div className="name">Male Name</div>
            <div className="post">Maths Instructor </div>
          </div>
        </Link>
        <Link to="/">
          <div className="content-part-3">
            <div className="border-line">
              <img src={IMG3} alt="" />
            </div>
            <div className="name">Female Name</div>
            <div className="post">English Instructor </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Instructors;
