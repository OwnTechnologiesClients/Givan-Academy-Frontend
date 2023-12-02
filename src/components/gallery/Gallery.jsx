import React from "react";
import "./gallery.scss";
import IMG1 from "../../assets/gallery/1.png";
import IMG2 from "../../assets/gallery/2.png";
import IMG3 from "../../assets/gallery/3.png";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-top-heading">
        <div className="gallery-head-section">
          <h4>Events & Gallery</h4>
          <h1>Gallery</h1>
        </div>
      </div>
      <div className="gallery-img-section">
        <div className="gallery-img-line">
          <img src={IMG1} alt="" />
          <img src={IMG2} alt="" />
          <img src={IMG3} alt="" />
        </div>
        <div className="gallery-img-line">
          <img src={IMG2} alt="" />
          <img src={IMG3} alt="" />
          <img src={IMG1} alt="" />
        </div>
        <div className="gallery-img-line">
          <img src={IMG3} alt="" />
          <img src={IMG1} alt="" />
          <img src={IMG1} alt="" />
        </div>
        <div className="gallery-img-line">
          <img src={IMG3} alt="" />
          <img src={IMG1} alt="" />
          <img src={IMG1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
