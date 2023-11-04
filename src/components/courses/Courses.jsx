import React from "react";
import "./courses.scss";
import Banner1 from "../../assets/banner1.png";
import checkbox from "../../assets/icons/checkbox.png";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div className="courses-section">
      <div className="banner-part-1">
        <img src={Banner1} alt="" />
      </div>

      <div className="detail">
        <div className="featured">
          <h4>FEATURED COURSE</h4>
        </div>

        <div className="text-details">
          <h4>
            Newcomers will benefit greatly <br /> 
            from doing our feature classes
          </h4>

          <p>
            We can support student forum 24/7 for national and international
            students.
          </p>
        </div>

        <div className="register">
          <p>
            Enjoy the top coaching learning methods and achieve next level
            skills! You are the creator of your own career & we will guide you
            through that. <span> Register Free Now!.</span>
          </p>
        </div>

        <div className="checkbox">
          <div className="box">
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">Money-Back Guarantee</Link>
              <div className="link">
                <img src={checkbox} alt="" />
                <Link to="/">Downloadable Resources</Link>
              </div>
            </div>
          </div>
          <div className="box">
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
        <div className="button"> Explore notes &gt;</div>
      </Link>
      </div>
    </div>
  );
};

export default Courses;
