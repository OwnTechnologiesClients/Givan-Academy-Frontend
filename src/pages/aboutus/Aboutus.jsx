import React from "react";
import "./about.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import StatisticsSection from "../../components/statistics/StatisticsSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import Tutorial from "../../components/tutorial/Tutorial";
import Vision from "../../components/vision/Vision";
import Connection from "../../components/connection/Connection";

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <Header />
      <Navbar />
      <Tutorial hd1={"About Us"} hd3={"About us"} />
      <Vision />
      <StatisticsSection  />
      <Testimonials />
      <Connection />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Aboutus;
