import React from "react";
import { Link } from "react-router-dom";
import "./herosection.scss";
import Banner from "../../assets/banner.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text-part">
        <h1>
          Check out <span>Givan</span>
          <br />
          <span>Academy</span> coaching <br />& tuition center
        </h1>

        <p>
          Curabitur arcu erat accumsan id imperdiet et porttitor at sem vivamus
          magna justo lacinia <br />
          eget consectetur sed convallis at tellus pellentesque in ipsum id orci
          porta dapibus.
        </p>

        <Link to="/notes">
          <div className="notes">View All Notes &gt;</div>
        </Link>
      </div>
      <div className="banner-part">
        <div className="shape-background-1"></div>
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
