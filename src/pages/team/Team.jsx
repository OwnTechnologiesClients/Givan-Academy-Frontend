import React from "react";
import "./team.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Tutorial from "../../components/tutorial/Tutorial";
import Teachers from "../../components/teachers/Teachers";
import Teachers2 from "../../components/teachers2/Teachers2";
import Teachers3 from "../../components/teachers3/Teachers3";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";

const Team = () => {
  return (
    <div className="team-container">
      <Header />
      <Navbar />
      <Tutorial hd1={"All Instructors"} hd3={"All Instructors"} />
      <Teachers />
      <Teachers2 />
      <Teachers3 />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Team;
