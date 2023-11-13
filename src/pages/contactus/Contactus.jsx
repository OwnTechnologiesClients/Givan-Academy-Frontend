import React from "react";
import "./contactus.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import locationIcon from "../../assets/icons/location.png";
import callIcon from "../../assets/icons/call.png";
import mailIcon from "../../assets/icons/mail.png";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Tutorial hd1={"Contact Us"} hd3={"Contact Us"} />
      <div className="contact-container">
        <div className="contact-page-section">
          <div className="contact-cards">
            <div className="card">
              <img src={locationIcon} alt="" />
              <div>
                <h2>OUR OFFICE LOCATION</h2>
                <p>Laxmi Nagar, New Delhi - 110065</p>
              </div>
            </div>
            <div className="card">
              <img src={callIcon} alt="" />
              <div>
                <h2>OUR CONTACT NUMBER</h2>
                <p>+91 9999888777</p>
              </div>
            </div>
            <div className="card">
              <img src={mailIcon} alt="" />
              <div>
                <h2>OUR CONTACT E-MAIL</h2>
                <p>support@example.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2 >
              Learn New Skills to go ahead for <br /> Your Career
            </h2>
           
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            optio in quia ipsum quae neque alias eligendi, nulla nisi. Veniam ut
            quis similique culpa natus dolor aliquam officiis ratione libero.
            Expedita asperiores aliquam provident amet dolores.</p>
            <form className="form-fields">
              <input name="name" placeholder="Enter Name" required />
              <input
                type="number"
                name="contactnumber"
                id="contactnumber"
                placeholder="Enter Contact Number"
                required
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default ContactUs;
