import React from "react";
import "./videos.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";

const Videos = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Tutorial hd1={"Videos"} hd3={"Videos"}/>
      
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Videos;
