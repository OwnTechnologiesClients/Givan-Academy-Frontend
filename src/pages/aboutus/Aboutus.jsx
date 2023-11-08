import React from "react";
import "./about.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <Header />
      <Navbar />
      <Tutorial hd1={"About Us"} hd3={"About us"} />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Aboutus;
