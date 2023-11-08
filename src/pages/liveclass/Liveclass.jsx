import React from "react";
import "./liveclass.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";
const Liveclass = () => {
  return (
    <div className="liveclass-container">
      <Header />
      <Navbar />
      <Tutorial hd1={"Live Class"} hd3={"Live Class"} />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Liveclass;
