import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import WhatsappIcon from "../../components/whatsappIcon/WhatsappIcon";
import Footer from "../../components/footer/Footer";
import Tutorial from "../../components/tutorial/Tutorial";
import India from "../../assets/payment/india.png";
import PAY from "../../assets/payment/pay-app.png";
import QRCODE from "../../assets/payment/qr-code.png";
import "./payment.scss";

const Payment = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Tutorial hd1={"payment"} hd3={"payment"} />
      <div className="payment-container">
        <div className="payment-section">
          <div className="right-section">
            <h2>
              Givan QR- <br /> Scan and Pay solution
            </h2>

            <p>
              Never say ‘No’ to a customer looking to make payment through QR{" "}
              <br />
              code. Offer them the ‘scan and pay’ contactless payment option{" "}
              <br />
              using our static QR code and enable a speedier checkout process.
            </p>

            <button className="upload-button">
              Upload Screenshot of payment
            </button>
          </div>
          <div className="left-section">
            <div className="img-map">
              <img src={India} alt="" />
            </div>
            <div className="img-pay">
              <img src={PAY} alt="" />

              <div className="pay-text">
                <img src={QRCODE} alt="" />
                <p className="text-section-pay">Scan and Pay of ₹50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsappIcon />
      <Footer />
    </>
  );
};

export default Payment;
