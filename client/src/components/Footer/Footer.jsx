import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <img src="/Mtc.png" alt="" />
            <div className="mtc-title">
              <p className="mtc">microsoft </p>{" "}
              <p className="mtc-2"> technical community</p>
            </div>
          </div>
          <div className="reach-us">
            <p className="reachus">reach us</p>
            <div className="address">
              <img src={"/location.png"} alt="" loading="lazy" />
              <p>UPES Bidholi,Dehradun 248007 Uttarakhand</p>
            </div>
            <div className="contact">
              <img src={"/contact.png"} alt="" loading="lazy" />
              <p>+91-99108 10462</p>
            </div>
            <div className="mail">
              <img src={"/mail.png"} alt="" loading="lazy" />
              <p>upesmtc@gmail.com</p>
            </div>
          </div>

          <div className="socials">
            <p>Connect With Us</p>
            <div className="icons">
              <img src="/insta.png" alt="" />
              <img src="/linkedin.png" alt="" />
              <img src="/yt.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
