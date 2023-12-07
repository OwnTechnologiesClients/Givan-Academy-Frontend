import React from "react";
import "./classes.scss";
import { Link } from "react-router-dom";
import Class from "../../assets/class.png";
import topper1 from "../../assets/result/Toppers Rank-02.png";
import topper2 from "../../assets/result/Toppers Rank-01.png";
import topper3 from "../../assets/result/Toppers Rank-03.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Classes = () => {
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

  const resultData = [
    { rank: "Rank 1", name: "BALDEEP SINGH", image: topper1 },
    { rank: "Rank 2", name: "RAVI MAURYA", image: topper2 },
    { rank: "Rank 3", name: "VIVEK BHARDWAJ", image: topper3 },
    { rank: "Rank 2", name: "BALDEEP SINGH", image: topper2 },
    { rank: "Rank 1", name: "RAVI MAURYA", image: topper1 },
    { rank: "Rank 2", name: "VIVEK BHARDWAJ", image: topper2 },
    { rank: "Rank 3", name: "RAVI MAURYA", image: topper3 },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  return (
    <div className="class">
      <div className="top-heading">
        {/*<div></div> */}
        <div className="courses">
          <h4>DISCOVER STUDENTS</h4>
          <h1>Topper Students</h1>
        </div>
        {/*<Link to="/notes">
          <div className="button"> View All &gt;</div>
        </Link> */}
      </div>

      {/*<div className="class-container">
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
                  <Link to="/notes">
                    <div className="button">{item.classButton}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="result-row">
      <Slider className="custom-slider" {...settings}>
        {resultData.map((data, index) => (
          <div key={index} className="col-md-3 tpimages">
            <div className="toppersimg">
              <center>
                <img className="result-img" src={data.image} />
              </center>
              <br />
              <p>{data.name}</p>
              <span>{data.rank}</span>
            </div>
          </div>
        ))}
        </Slider>
      </div>

      <div className="text-section">
        <p>
          Enjoy the top notch learning methods and achieve next level skills!
          You are the creator of
        </p>
        <p>
          your own career & we will guide you through that.{" "}
          <Link to="/apply">
            {" "}
            <span> Register Free Now!.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Classes;
