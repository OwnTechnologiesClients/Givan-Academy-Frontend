import React from "react";
import "./tuition.scss";
import { Link } from "react-router-dom";

const Tuition = () => {
  return (
    <div className="tuition-section">
      <h1>
        Boost Your Online Coaching & <br />
        Tuition Center With Easy Way
      </h1>
      <Link to="/contactus">
        <div className="button"> Start Free Trial &gt;</div>
      </Link>
    </div>
  );
};

export default Tuition;
