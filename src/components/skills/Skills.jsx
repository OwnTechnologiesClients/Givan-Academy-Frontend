import React from "react";
import "./skills.scss";
import { Link } from "react-router-dom";
import SKILLS from "../../assets/skills.png";
const Skills = () => {
  return (
    <div className="skills">
      <div className="earn">
        <div className="st-card">
          <div className="bg-clr">
            <img src={SKILLS} alt="" />
          </div>

          <div className="stats">
            <h1>
              Learn The Latest <br /> Skills
            </h1>
            <p>
              Curabitur arcu erat accumsan id <br /> imperdiet sem vivamu
            </p>
            <Link to="/">
            <div className="view">View Courses &gt;</div>
            </Link>
          </div>
        </div>

        <div className="st-card">
          <div className="bg-clr">
            <img src={SKILLS} alt="" />
          </div>
          <div className="stats">
            <h1>
              10+ Online <br />
              Courses
            </h1>
            <p>
              Curabitur arcu erat accumsan id <br /> imperdiet sem vivamu
            </p>
            <Link to="/">
            <div className="view">View Courses &gt;</div>
            </Link>
          </div>
        </div>

        <div className="st-card">
          <div className="bg-clr">
            <img src={SKILLS} alt="" />
          </div>
          <div className="stats">
            <h1>
              Earn A <br />
              Certificate
            </h1>
            <p>
              Curabitur arcu erat accumsan id <br /> imperdiet sem vivamu
            </p>
            <Link to="/">
            <div className="view">View Courses &gt;</div>
            </Link>
          </div>
        </div>

        <div className="st-card">
          <div className="bg-clr">
            <img src={SKILLS} alt="" />
          </div>
          <div className="stats">
            <h1>
              Up Your <br /> Skills
            </h1>
            <p>
              Curabitur arcu erat accumsan id <br /> imperdiet sem vivamu
            </p>
            <Link to="/">
              <div className="view">View Courses &gt;</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
