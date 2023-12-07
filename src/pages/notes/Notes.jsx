import React from "react";
import "./notes.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";
import Subject from "../../components/subject/Subject";
import Chapter from "../../components/chapter/Chapter";

const Notes = () => {
  return (
    <div className="notes-container">
      <Header />
      <Navbar />
      <Tutorial hd1={"Notes"} hd3={"Notes"} />
      <Subject />
      <Chapter />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Notes;
