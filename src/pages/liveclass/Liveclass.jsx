import React from "react";
import "./liveclass.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";
import Live from "../../assets/liveclass1.png";
import BOX from "../../assets/icons/checkbox.png";
import CopyToClipboardButton from "../../components/copyToClipboardButton/CopyToClipboardButton";

const Liveclass = () => {
  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const contentToCopy = "https://youtube.com";

  const data = [
    {
      title: "Join With Discord Server",
      link: "https://www.youtube.com/",
      buttonText: "Copy Address",
    },
    {
      title: "Join With Google Meet",
      link: "https://meet.google.com/edy-yijv-pfv",
      buttonText: "Copy Address",
    },
    {
      title: "Join With Zoom Meet",
      link: "https://www.Zoom.com/",
      buttonText: "Copy Address",
    },
  ];

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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              nisi ut aliquip ex ea commodo consequat.
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
        <div>
          <div></div>
        </div>

        <div className="form-section-live">
          <div className="form-fields">
            <div className="form-buttons">
              {data.map((item) => (
                <div className="form-btn" key={item.title}>
                  <h4>{item.title}</h4>
                  <CopyToClipboardButton
                    linkToCopy={item.link}
                    buttonText={item.buttonText}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </div>
  );
};

export default Liveclass;
