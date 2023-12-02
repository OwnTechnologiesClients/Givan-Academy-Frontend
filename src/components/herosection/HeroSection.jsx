import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "./herosection.scss";
import Banner1 from "../../assets/Banner_03.png";
import Banner2 from "../../assets/Banner_01.jpg";
import Banner3 from "../../assets/Banner_02.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {

  const [autoplay, setAutoplay] = useState(true);

  const startAutoplay = () => {
      setAutoplay(true);
  };

  const toggleAutoplay = () => {
      setAutoplay((prevAutoplay) => !prevAutoplay);
  };
  return (
    <div className="hero-section">
      {/*<div className="text-part">
        <h1>
          Check out <span>Givan</span>
          <br />
          <span>Academy</span> coaching <br />& tuition center
        </h1>

        <p>
          Curabitur arcu erat accumsan id imperdiet et porttitor at sem vivamus
          magna justo lacinia eget consectetur sed convallis at tellus
          pellentesque in ipsum id orci porta dapibus.
        </p>

        <Link to="/notes">
          <div className="notes">View All Notes &gt;</div>
        </Link>
      </div>
      <div className="banner-part">
        <div className="shape-background-1"></div>
        <img src={Banner} alt="" />
      </div> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={
          autoplay
            ? {
                delay: 2500,
              }
            : false
        }
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onClick={toggleAutoplay} // Toggle autoplay on click
        onMouseLeave={startAutoplay}
      >
        <SwiperSlide>
          <img src={Banner1} className="heroimage" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} className="heroimage" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Banner3} className="heroimage" alt="" />
      </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
