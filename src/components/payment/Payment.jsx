import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";
import "./payment.scss";

const Payment = () => {
  return (
    <div className="payment-container">
      <Header />
      <Navbar />
      <Tutorial hd1={"payment"} hd3={"payment"} />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Payment;
