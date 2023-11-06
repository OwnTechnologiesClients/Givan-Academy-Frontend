import React from "react";
import "./notes.scss";
import Banner4 from "../../assets/banner4.png";
import checkbox from "../../assets/icons/checkbox.png";
import { Link } from "react-router-dom";

const Notes = () => {
  return (
    <div className="notes-section">
      <div className="banner-part-4">
        <div className="shapes-background"></div>
        <img src={Banner4} alt="" />
      </div>
      <div className="detailed">
        <div className="notes">
          <h4>Notes</h4>
        </div>
        <div className="text-section">
          <h4>All kinds of online notes at low cost</h4>
        </div>

        <div className="text-details">
          <p>
            Enjoy the top coaching learning methods and achieve next level
            skills! You are the creator of your own career & we will guide you
            through that. <span> Register Free Now!.</span>
          </p>
        </div>

        <div className="check-box">
          <div className="box-1">
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">Money-Back Guarantee</Link>
              <div className="link">
                <img src={checkbox} alt="" />
                <Link to="/">Downloadable Resources</Link>
              </div>
            </div>
          </div>
          <div className="box-1">
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">Certificate Of Completion</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">10+ More Lessons</Link>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="button"> Start Classes &gt;</div>
        </Link>
      </div>
    </div>
  );
};

export default Notes;
