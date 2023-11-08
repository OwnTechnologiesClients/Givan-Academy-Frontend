import React from 'react'
import "./details.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";

const Details = () => {
  return (
    <div>
    <Header />
    <Navbar />
    <Tutorial hd1={"Details"} hd3={"Details"}/>
    
    <WhatsappIcon />
    <Footer />
    </div>
  )
}

export default Details
