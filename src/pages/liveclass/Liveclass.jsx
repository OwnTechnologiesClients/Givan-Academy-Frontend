import React from "react";
import "./liveclass.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";
import Live from "../../assets/liveclass1.png";
import BOX from "../../assets/icons/checkbox.png";

const Liveclass = () => {
  const copyToClipboard = (linkAddress) => {
    navigator.clipboard.writeText(linkAddress);
    alert(`Link copied to clipboard: ${linkAddress}`);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Tutorial hd1={"Live Class"} hd3={"Live Class"} />
      <div className="liveclass-container">
        <div className="live-section">
          <div className="live-img-section">
            <img src={Live} alt="" />
          </div>
          <div className="live-text-section">
            <h4>ABOUT US</h4>
            <h2>Learn New Skills to go ahead for Your Career</h2>
            <p className="stu">
              We can support student forum 24/7 for national and international
              students.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi
              ut aliquip ex ea commodo consequat.
            </p>
            <div className="check-bx">
              <img src={BOX} alt="" />
              <p>A place where you can achieve</p>
            </div>
            <p>
              Education encompasses both the teaching and learning of knowledge,
              proper conduct, and technical competency.
            </p>
          </div>
        </div>

        <div className="form-section-live">
          <form className="form-fields">
            <div className="form-btn">
              <h4>Join With Discord Server</h4>
              <input
                type="text"
                name="discordLink"
                placeholder="Link address"
                required
              />
              <button
                onClick={() =>
                  copyToClipboard(
                    document.getElementsByName("discordLink")[0].value
                  )
                }
              >
                Copy Address
              </button>
            </div>
            <div className="form-btn">
              <h4>Join With Google Meet</h4>
              <input
                type="link"
                name="googleMeetLink"
                placeholder="Link address"
                required
              />
              <button
                onClick={() =>
                  copyToClipboard(
                    document.getElementsByName("googleMeetLink")[0].value
                  )
                }
              >
                Copy Address
              </button>
            </div>
            <div className="form-btn">
              <h4>Join With Zoom Call</h4>
              <input
                type="text"
                name="zoomLink"
                placeholder="Link address"
                required
              />
              <button
                onClick={() =>
                  copyToClipboard(
                    document.getElementsByName("zoomLink")[0].value
                  )
                }
              >
                Copy Address
              </button>
            </div>
          </form>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Liveclass;
