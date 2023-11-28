import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SKILLS from "../../assets/skills.png";
import "./skills.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Data = [
    {
      title: "Learn The Latest ",
      title2: "Skills",
      subtitle: "Curabitur arcu erat accumsan id imperdiet sem vivamu",
      courses: "Learn More",
    },
    {
      title: "10+ Online ",
      title2: "Courses",
      subtitle: "Curabitur arcu erat accumsan id imperdiet sem vivamu",
      courses: "Learn More",
    },
    {
      title: "Earn A",
      title2: "Certificate",
      subtitle: "Curabitur arcu erat accumsan id imperdiet sem vivamu",
      courses: "Learn More",
    },
    {
      title: "Up Your ",
      title2: "Skill",
      subtitle: "Curabitur arcu erat accumsan id imperdiet sem vivamu",
      courses: "Learn More",
    },
  ];

  const renderSlider = () => {
    return (
      <Slider className="custom-slider" slidesToShow={1} slidesToScroll={1} infinite={true}>
        {Data.map((item, index) => (
          <div className="earn">
            <div key={index} className="st-card">
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
              <Link to="/aboutus">
                <div className="view">{item.courses} &gt;</div>
              </Link>
            </div>
          </div>
          </div>
        
        ))}
      </Slider>
    );
  };

  return (
    <div className="skills">
      {isMobile ? (
        renderSlider()
      ) : (
        <div className="earn">
          {Data.map((item, index) => (
            <div key={index} className="st-card">
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
                <Link to="/aboutus">
                  <div className="view">{item.courses} &gt;</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
