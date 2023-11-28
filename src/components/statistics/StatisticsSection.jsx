import React, { useState, useEffect } from "react";
import "./Statistics.scss";
import smile from "../../assets/smile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StatisticsSection = () => {
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

  const statisticsData = [
    { value: "50+", label: "HAPPY STUDENTS" },
    { value: "5+", label: "TOTAL TEACHERS" },
    { value: "100+", label: "CERTIFICATION" },
    { value: "2000+", label: "EXAMS" },
  ];

  const renderSlider = () => {
    return (
      <Slider slidesToShow={1} slidesToScroll={1} infinite={true}>
        {statisticsData.map((data, index) => (
          <div className="st-container" key={index}>
            <div className="st-card">
              <img src={smile} alt="" />
              <div className="stats">
                <h1>{data.value}</h1>
                <p>{data.label}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <div className="statistics">
      {isMobile ? (
        renderSlider()
      ) : (
        <div className="st-container">
          {statisticsData.map((data, index) => (
            <div key={index} className="st-card">
              <img src={smile} alt="" />
              <div className="stats">
                <h1>{data.value}</h1>
                <p>{data.label}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatisticsSection;
