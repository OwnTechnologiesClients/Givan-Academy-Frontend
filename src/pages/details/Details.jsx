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
  // Use the useLocation hook to get the state passed during navigation
  const location = useLocation();
  const { selectedClass, selectedSubject, subsectionData ,subjectData } = location.state;

  console.log("Subsection Data:", subjectData);



  return (
    <div>
      <Header />
      <Navbar />
      <Tutorial hd1={"Details"} hd3={"Details"}/>
      
      {/* Pass the data to the Notesdetail component */}
      <Notesdetail
        selectedClass={selectedClass}
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
