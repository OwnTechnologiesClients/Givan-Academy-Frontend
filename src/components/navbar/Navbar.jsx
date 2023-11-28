import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import hamburger from "../../assets/icons/hamburger.png";
import "./navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleTabClick = (path) => {
    setActiveTab(path);
    setMenuOpen(false);

    // Optionally, you can scroll to the top when a tab is clicked
    window.scrollTo(0, 0);
  };

  return (
    <div className={`nav-bar${menuOpen ? " menu-open" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <img src={hamburger} alt="" />
      </div>

      <div className="tabs">
        <Link to="/" onClick={() => handleTabClick("/")}>
          <div className={`menu-items${activeTab === "/" ? " active" : ""}`}>
            Home
          </div>
        </Link>
        <Link to="/notes" onClick={() => handleTabClick("/notes")}>
          <div
            className={`menu-items${activeTab === "/notes" ? " active" : ""}`}
          >
            Notes
          </div>
        </Link>
        <Link to="/videos" onClick={() => handleTabClick("/videos")}>
          <div
            className={`menu-items${activeTab === "/videos" ? " active" : ""}`}
          >
            Videos
          </div>
        </Link>
        <Link to="/aboutus" onClick={() => handleTabClick("/aboutus")}>
          <div
            className={`menu-items${activeTab === "/aboutus" ? " active" : ""}`}
          >
            About Us
          </div>
        </Link>
        <Link to="/contactus" onClick={() => handleTabClick("/contactus")}>
          <div
            className={`menu-items${
              activeTab === "/contactus" ? " active" : ""
            }`}
          >
            Contact Us
          </div>
        </Link>
        <Link to="/liveclass" onClick={() => handleTabClick("/liveclass")}>
          <div
            className={`menu-items${
              activeTab === "/liveclass" ? " active" : ""
            }`}
          >
            Live Class
          </div>
        </Link>
        <Link to="/apply">
          <div className="join">JOIN AS INSTRUCTOR</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
