import React from 'react';
import { useLocation } from 'react-router-dom';
import "./details.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";
import Notesdetail from '../../components/notesdetail/Notesdetail';

const Details = () => {
  
  const location = useLocation();
  const { selectedSubject, subsectionData, subjectData } = location.state;
  console.log('Location State:', location.state);
  console.log("Subsection Data:", subjectData);



  return (
    <div>
      <Header />
      <Navbar />
      <Tutorial hd1={"Details"} hd3={"Details"}/>
      
      <Notesdetail 
        selectedSubject={selectedSubject}
        subsectionData={subsectionData}
        subjectData={subjectData}
      />
      <WhatsappIcon />
      <Footer />
    </div>
  );
}

export default Details;
