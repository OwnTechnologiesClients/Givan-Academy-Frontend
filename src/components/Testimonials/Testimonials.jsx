import React from "react";
import "./testimonials.scss";
import img from "../../assets/img1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const classCardDetails = [
    {
      key: "1",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-1)",
      videoLink:
        "https://www.youtube.com/embed/SqcY0GlETPk?si=VlXRZxv74Nlqa2Fc",
    },
    {
      key: "2",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-2)",
      videoLink:
        "https://www.youtube.com/embed/qz0aGYrrlhU?si=ldRzbPwkCRADWC7d" ,
    },
    {
      key: "3",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-3)",
      videoLink:
        "https://www.youtube.com/embed/-_X6PhkjpzU?si=E3Vh42ftkJ7K17YM",
    },
    {
      key: "4",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-4)",
      videoLink:
        "https://www.youtube.com/embed/d56mG7DezGs?si=0TPS91bGgXTXHK1T",
    },
    {
      key: "5",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-5)",
      videoLink:
        "https://www.youtube.com/embed/SqcY0GlETPk?si=VlXRZxv74Nlqa2Fc",
    },
    {
      key: "6",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-6)",
      videoLink:
        "https://www.youtube.com/embed/SqcY0GlETPk?si=VlXRZxv74Nlqa2Fc",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials">
      <div className="text-part">
        <h5>TESTIMONIALS</h5>
        <h1>Happy Students Say</h1>
      </div>

      <div className="card-container">
        <Slider className="custom-slider" {...settings}>
          {classCardDetails.map((item) => (
            <div key={item.key}>
              <div className="card-part">
                <div className="card-section">
                  <div className="img-section">
                    <img src={item.classImg} alt={item.className} />
                  </div>
                  <div className="name-class">
                    <h4>{item.className}</h4>
                    <p>{item.cardClass}</p>
                  </div>
                </div>

                <div className="video-section">
                  <iframe
                    width="260"
                    height="215"
                    src={item.videoLink}
                    title={item.className}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
