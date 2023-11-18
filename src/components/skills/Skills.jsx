import React from "react";
import "./skills.scss";
import { Link } from "react-router-dom";
import SKILLS from "../../assets/skills.png";
const Skills = () => {
  const Data = [
    {
      title: "Learn The Latest ",
      title2: "Skills",
      subtitle: "Curabitur arcu erat accumsan id imperdiet sem vivamu",
      courses: "View Courses",
    },
    {
      title: "10+ Online ",
      title2: "Courses",
      subtitle: "Curabitur arcu erat accumsan id imperdiet sem vivamu",
      courses: "View Courses",
    },
    {
      title: "Earn A",
      title2: "Certificate",
      subtitle: "Curabitur arcu erat accumsan id imperdiet sem vivamu",
      courses: "View Courses",
    },
    {
      title: "Up Your ",
      title2: "Skill",
      subtitle: "Curabitur arcu erat accumsan id imperdiet sem vivamu",
      courses: "View Courses",
    },
  ];

  return (
    <div className="skills">
      <div className="earn">
        {Data.map((item) => (
          <div className="st-card">
            <div className="bg-clr">
              <img src={SKILLS} alt="" />
            </div>
            <div className="stats">
              <h1>
                {item.title}
                <br />
                <span>{item.title2}</span>
              </h1>
              <p>{item.subtitle}</p>
              <Link to="/">
                <div className="view">{item.courses} &gt;</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
