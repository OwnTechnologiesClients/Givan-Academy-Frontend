import React from "react";
import "./contactus.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <Header />
      <Navbar />
      <Tutorial hd1={"Contact Us"} hd3={"Contact Us"} />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default ContactUs;
