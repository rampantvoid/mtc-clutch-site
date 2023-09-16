import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  return (
    <>
      <div className="navbar">
        <div className="content-container">
          <div className="logo-wrapper">
            <img src={require("./assets/Mtc.png")} alt="" />
          </div>
          <div className="nav-links">
            <p></p>
            <p></p>
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
