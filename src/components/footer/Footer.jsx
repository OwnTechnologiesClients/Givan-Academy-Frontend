import React from "react";
import "./footer.scss";
import HeaderBG from "../../assets/header-bg.png";
import Headerlogo from "../../assets/headerlogo.png";
import Logo from "../../assets/icons/logo.png";
import fbicon from "../../assets/icons/facebook.png";
import yticon from "../../assets/icons/youtube.png";
import igicon from "../../assets/icons/instagram.png";
import checkbox from "../../assets/icons/checkbox.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="details">
            <div className="footer-logo-img">
              <div className="footer-bg">
                <img  src={HeaderBG} alt="" />
              </div>
              <div className="footer-logo-bg">
                <img src={Headerlogo} alt="" />
              </div>
              <Link className="ft-logo" to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="message">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            {/*  <div className="footer-icons">
              <a href="https://www.facebook.com" target="_blank">
                <img src={fbicon} width={"25vw"} alt="" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <img src={yticon} width={"25vw"} alt="" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src={igicon} width={"25vw"} alt="" />
              </a>
            </div>*/}
          </div>
          <div className="links ">
            <h4>Courses</h4>

            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">HTML & CSS</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">Java</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">Python</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">Power Point</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="/">Ms-Office</Link>
            </div>
          </div>

          <div className="links ">
            <h4>Useful Links</h4>

            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="">About us</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="">Gallary</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="">Testimonail</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="">Courses</Link>
            </div>
            <div className="link">
              <img src={checkbox} alt="" />
              <Link to="">Students</Link>
            </div>
          </div>

          <div className="contact-us">
            <h4>Contact Us</h4>
            <div className="text-part">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div className="footer-container-2">
          <div className="footer-logo-text">
            <div className="footer-logo">
              <div className="footer-bg-img">
               {/* <img src={HeaderBG} alt="" /> */} 
              </div>
              <div className="footer-logo-bg">
               {/*<img src={Headerlogo} alt="" /> */} 
              </div>
            </div>

            <div className="footer-text">
              <p>
                © 2023 All Rights Reserved. Created with ❤️ by
                <span> OwnTechnologies</span>
              </p>
            </div>

            <div className="footer-icon">
              <a href="https://www.facebook.com" target="_blank">
                <img src={fbicon} width={"18vw"} alt="" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <img src={yticon} width={"18vw"} alt="" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src={igicon} width={"18vw"} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
