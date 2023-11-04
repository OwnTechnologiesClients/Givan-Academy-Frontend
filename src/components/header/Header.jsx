import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import fbicon from "../../assets/icons/facebook.png";
import yticon from "../../assets/icons/youtube.png";
import igicon from "../../assets/icons/instagram.png";

const Header = () => {
  return (
    <div className="top-bar">
      <div className="top-links">
        <Link to="/">
          <span>FAQ &nbsp;&nbsp;|</span>
        </Link>
        <Link to="/">
          <span>Help Desk &nbsp;&nbsp;|</span>
        </Link>
        <Link to="/">
          <span>Login</span>
        </Link>
      </div>

      <div className="top-icons">
        <a href="https://www.facebook.com" target="_blank">
          <img src={fbicon} width={"17vw"} alt="" />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img src={yticon} width={"17vw"} alt="" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={igicon} width={"17vw"} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
