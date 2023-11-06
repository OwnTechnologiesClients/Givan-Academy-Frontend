import React from "react";
import "./testimonials.scss";
import img from "../../assets/img1.png";

const Testimonials = () => {
  const classCardDetails = [
    {
      key: "1",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-1)",
      classDetails:
        "We care for children, protect their welfare, and prepare them for the future. We care for children, protect  their welfare, and prepare them for the future We care for children, protect ",
    },
    {
      key: "2",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-2)",
      classDetails:
        "We care for children, protect their welfare, and prepare them for the future. We care for children, protect  their welfare, and prepare them for the future We care for children, protect ",
    },
    {
      key: "3",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-3)",
      classDetails:
        "We care for children, protect their welfare, and prepare them for the future. We care for children, protect  their welfare, and prepare them for the future We care for children, protect ",
    },
    {
      key: "4",
      classImg: img,
      className: "Pawan Yadav",
      cardClass: "(Class-4)",
      classDetails:
        "We care for children, protect their welfare, and prepare them for the future. We care for children, protect  their welfare, and prepare them for the future We care for children, protect ",
    },
  ];

  return (
    <div className="testimonials">
      <div className="text-part">
        <h5>TESTIMONIALS</h5>
        <h1>Happy Students Say</h1>
      </div>

      <div className="card-container">
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

              <div className="text-section">
                <p>{item.classDetails}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
