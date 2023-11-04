import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import hamburger from "../../assets/icons/hamburger.png";

const Navbar = () => {

  return (
    <div className="nav-bar">
      <div className="menu-icon" >
        <img src={hamburger} alt="" />
      </div>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="tabs">
        <Link to="/">
          <div className="menu-items">Homes</div>
        </Link>
        <Link to="/">
          <div className="menu-items">Notes</div>
        </Link>
        <Link to="/">
          <div className="menu-items">Videos</div>
        </Link>
        <Link to="/">
          <div className="menu-items">About Us</div>
        </Link>
        <Link to="/">
          <div className="menu-items">Contact Us</div>
        </Link>
        <Link to="/">
          <div className="menu-items">Live Class</div>
        </Link>
        <Link>
          <div className="join">JOIN AS INSTRUCTOR</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
