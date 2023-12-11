import React from "react";
import "./instructors.scss";
import { Link } from "react-router-dom";
import IMG1 from "../../assets/3.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  {
    id: 4,
    img: IMG2,
    name: "Male Name",
    post: "Maths Instructor",
    color: "#B5F4E1",
    color2: "#5BDDB5",
  },
  {
    id: 5,
    img: IMG3,
    name: "Female Name",
    post: "English Instructor",
    color: "#FF2D59",
    color2: "#FF2D59",
  },
];
const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Instructors = () => {
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
      <Slider className="custom-slider" {...settings}>
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
      </div>
    </div>
  );
};

export default Instructors;
