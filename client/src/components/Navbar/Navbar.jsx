import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isSmall, setScreen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const dropDown = () => {
    if (isSmall) {
      const links = document.querySelector(".nav-links");
      console.log(toggle);
      if (toggle) {
        links.classList.remove("hidden");
        setToggle(!toggle);
      } else {
        links.classList.add("hidden");
        setToggle(true);
        console.log(toggle);
      }
    }
  };

  useEffect(() => {
    if (isSmall) {
      const links = document.querySelector(".nav-links");
      console.log(toggle);
      if (toggle) {
        links.classList.remove("hidden");
        setToggle(!toggle);
      } else {
        links.classList.add("hidden");
        setToggle(true);
        console.log(toggle);
      }
    }
  }, []);

  useEffect(() => {
    const { innerWidth } = window;
    console.log(innerWidth);
    if (innerWidth <= 768) {
      setScreen(true);
    }
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="content-container">
          <div className="logo-wrapper">
            <img src={require("./assets/Mtc.png")} alt="" />
          </div>
          {isSmall && (
            <Hamburger
              toggled={toggle}
              toggle={setToggle}
              onToggle={dropDown}
            />
          )}

          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/team"
              className={`nav-link ${
                location.pathname === "/team" ? "active" : ""
              }`}
            >
              Team
            </Link>
            <Link
              to="/gallery"
              className={`nav-link ${
                location.pathname === "/gallery" ? "active" : ""
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
          <div className="login-wrapper">
            <button className="login-button">
              login <img src={require("./assets/login-white.png")} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
