import React from "react";
import "./Home.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/herosection/HeroSection";
import Skills from "../../components/skills/Skills";
import Classes from "../../components/classes/Classes";
import Footer from "../../components/footer/Footer";
import Courses from "../../components/courses/Courses";
import StatisticsSection from "../../components/statistics/StatisticsSection";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Demo from "../../components/demo/Demo";
import Notes from "../../components/notes/Notes";
import Tuition from "../../components/tuition/Tuition";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <Skills />
      <Classes />
      <Courses />
      <StatisticsSection />
      <Demo />
      <Tuition />
      <Notes />
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Home;
