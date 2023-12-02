import React, { useState, useEffect } from "react";
import "./teachers.scss";
import Teacher1 from "../../assets/teacher/1.png";
import Teacher2 from "../../assets/teacher/2.png";
import Teacher3 from "../../assets/teacher/3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teacherData = [
  {
    name: "Female Name",
    post: "Director",
    para: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future We care for children, protect their welfare, and prepare them for the future.",
    image: Teacher1,
    color: "#FAD39A",
    color2: "#FF9700",
  },
  {
    name: "Male Name",
    post: "Director",
    para: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future We care for children, protect their welfare, and prepare them for the future.",
    image: Teacher2,
    color: "#B5F4E1",
    color2: "#5BDDB5",
  },
  {
    name: "Female Name",
    post: "Director",
    para: "We care for children, protect their welfare, and prepare them for the future. We care for children, protect their welfare, and prepare them for the future We care for children, protect their welfare, and prepare them for the future.",
    image: Teacher3,
    color: "#FF2D59",
    color2: "#FF2D59",
  },
];




const Teachers = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSlider = () => {
    return (
      <Slider
        className="custom-slider"
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
      >
        {teacherData.map((teacher, index) => (
          <div className="teacher-parent-section">
            <div key={index} className="teacher-section">
              <div
                className="teacher-border"
                style={{ borderColor: teacher.color }}
              >
                <div className="teacher-img">
                  <img src={teacher.image} alt="" />
                </div>
              </div>
              <div className="teacher-text-part">
                <div className="teacher-name">
                  <h1>{teacher.name}</h1>
                </div>
                <div className="teacher-post" style={{ color: teacher.color2 }}>
                  <h3>{teacher.post}</h3>
                </div>
                <div className="teacher-para">
                  <p>{teacher.para}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <div className="teacher-container">
      {isMobile ? (
        renderSlider()
      ) : (
        <div className="teacher-parent-section">
          {teacherData.map((teacher, index) => (
            <div key={index} className="teacher-section">
              <div
                className="teacher-border"
                style={{ borderColor: teacher.color }}
              >
                <div className="teacher-img">
                  <img src={teacher.image} alt="" />
                </div>
              </div>
              <div className="teacher-text-part">
                <div className="teacher-name">
                  <h1>{teacher.name}</h1>
                </div>
                <div className="teacher-post" style={{ color: teacher.color2 }}>
                  <h3>{teacher.post}</h3>
                </div>
                <div className="teacher-para">
                  <p>{teacher.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  
};

export default Teachers;
