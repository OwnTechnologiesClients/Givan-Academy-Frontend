import React, { useRef } from "react";
import CoursePageList from "../../components/coursepagelist/CoursePageList";
import "./courselink.scss";

const CourseLinks = ({ activeLink, handleLinkClick ,sublinks }) => {

  return (
    <div className="course-page-left-nav">
      <CoursePageList
        hd1={"All Notes"}
        hd2={"List"}
        links={sublinks}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
      />
      <CoursePageList
        hd1={"Related"}
        hd2={" Videos"}
        links={sublinks}
        activeLink={activeLink}
        onLinkClick={handleLinkClick}
      />

      <div className="opening-hours-list">
        <h2>
          Opening <span className="under-bar">Hours</span>
        </h2>
        <div className="timings">
          <span>Monday :</span>
          <span>6:00 am - 8:00 pm</span>
        </div>
        <div className="timings">
          <span>Tuesday :</span>
          <span>6:00 am - 8:00 pm</span>
        </div>
        <div className="timings">
          <span>Wednesday :</span>
          <span>6:00 am - 8:00 pm</span>
        </div>
        <div className="timings">
          <span>Thursday :</span>
          <span>6:00 am - 8:00 pm</span>
        </div>
        <div className="timings">
          <span>Friday :</span>
          <span>6:00 am - 8:00 pm</span>
        </div>
        <div className="timings">
          <span>Saturday :</span>
          <span>6:00 am - 8:00 pm</span>
        </div>
        <div className="timings">
          <span>Sunday :</span>
          <span style={{ width: "50%" }}>Closed</span>
        </div>
      </div>

      <div className="contact-form">
        <h2>
          Quick <span className="under-bar">Contact</span>
        </h2>
        <form className="form-fields" >
          <input
            type="email"
            name="email"
            id="contact-email"
            placeholder="Enter Email"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default CourseLinks;
