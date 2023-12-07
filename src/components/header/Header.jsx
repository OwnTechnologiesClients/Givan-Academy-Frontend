import React from "react";
import "./Header.scss";
import HeaderBG from "../../assets/header-bg.png";
import Headerlogo from "../../assets/headerlogo.png";
import fbicon from "../../assets/icons/facebook.png";
import yticon from "../../assets/icons/youtube.png";
import igicon from "../../assets/icons/instagram.png";

const Header = () => {
  return (
    <div class="header-container">
      <div className="header-logo-icon">
        <div className="header-logo">
          <div className="header-bg-img">
            <img src={HeaderBG} alt="" />
          </div>
          <div className="header-logo-bg">
            <img src={Headerlogo} alt="" />
          </div>
        </div>

        <div className="header-icon">
          <a href="https://www.facebook.com" target="_blank">
            <img src={fbicon} width={"18.5vw"} alt="" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={yticon} width={"18.5vw"} alt="" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={igicon} width={"18.5vw"} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
