import React from "react";
import "./apply.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import ApplyIMG from "../../assets/apply-bg.png";
import Tutorial from "../../components/tutorial/Tutorial";
import Box from "../../assets/icons/checkbox.png";
const Apply = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Tutorial hd1={"Apply"} hd3={"Apply"} />
      <div className="apply-container">
        <div className="img-apply">
          <img src={ApplyIMG} alt="" />
        </div>
        <div className="text-apply">
          <h4>JOIN OUR TEAM</h4>
          <h2>Become an Instructor</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            Ut nisi ut aliquip ex ea commodo <br /> consequat.
          </p>
          <div className="apply-checkbox">
            <div className="box">
              <img src={Box} alt="" />
              <p>Englsih Teacher</p>
            </div>
            <div className="box">
              <img src={Box} alt="" />
              <p>Hindi Teacher</p>
            </div>
            <div className="box">
              <img src={Box} alt="" />
              <p>Math Teacher</p>
            </div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Apply;
