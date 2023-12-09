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
import Cost from "../../components/cost/Cost";
import Tuition from "../../components/tuition/Tuition";
import Instructor from "../../components/instructors/Instructors"
import Testimonials from "../../components/Testimonials/Testimonials";
import Online from "../../components/onlinenotes/Online";


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
      <Online />
      <Testimonials />
      <Instructor />
      <Tuition />
      <Cost />
      <WhatsappIcon />
      <Footer  />
    </div>
  );
};

export default Home;
