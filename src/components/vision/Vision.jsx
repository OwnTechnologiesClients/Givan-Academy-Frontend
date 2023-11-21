import React from "react";
import "./vision.scss";
import VISION from "../../assets/vision.png";

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="vision-section">
        <div className="img-vision">
          <img src={VISION} alt="" />
        </div>
        <div className="text-vision">
          <div className="our-vision">
            <h4>OUR VISION</h4>
          </div>

          <div className="career">
            <h1>Learn New Skills to go ahead for</h1>
            
            <h1>Your Career</h1>
          </div>

          <div className="dolor">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>

          <div className="education">
            <p>
              Education encompasses both the teaching and learning of knowledge,
              proper conduct, and technical competency. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex
              ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
