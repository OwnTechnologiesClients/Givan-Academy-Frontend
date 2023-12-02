import React, { useState, useEffect } from "react";
import "./instructors.scss";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG1 from "../../assets/3.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/1.png";

const instructorData = [
  {
    id: 1,
    img: IMG1,
    name: "Female Name",
    post: "Director",
    color: "#FAD39A",
    color2: "#FF9700",
  },
  {
    id: 2,
    img: IMG2,
    name: "Male Name",
    post: "Maths Instructor",
    color: "#B5F4E1",
    color2: "#5BDDB5",
  },
  {
    id: 3,
    img: IMG3,
    name: "Female Name",
    post: "English Instructor",
    color: "#FF2D59",
    color2: "#FF2D59",
  },
];

const Instructors = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSlider = () => {
    return (
      <Slider slidesToShow={1} slidesToScroll={1} infinite={true}>
        {instructorData.map((instructor) => (
          <div key={instructor.id}>
            <div className="content-part">
              <div
                className="border-line"
                style={{ borderColor: instructor.color }}
              >
                <img src={instructor.img} alt="" />
              </div>
              <div className="name">{instructor.name}</div>
              <div className="post" style={{ color: instructor.color2 }}>
                {instructor.post}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <div className="instructor-section">
      <div className="text-section">
        <div></div>
        <div className="instructor-head">
          <h5>MAKE CONNECTIONS</h5>
          <h1>Team of Instructors</h1>
        </div>

        <Link to="/team">
          <div className="button"> View All &gt;</div>
        </Link>
      </div>
      <div className="img-section">
        {isMobile
          ? renderSlider()
          : instructorData.map((instructor) => (
              <div key={instructor.id}>
                <div className="content-part">
                  <div
                    className="border-line"
                    style={{ borderColor: instructor.color }}
                  >
                    <img src={instructor.img} alt="" />
                  </div>
                  <div className="name">{instructor.name}</div>
                  <div className="post" style={{ color: instructor.color2 }}>
                    {instructor.post}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Instructors;
