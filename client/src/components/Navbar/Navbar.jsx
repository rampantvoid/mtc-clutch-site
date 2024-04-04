import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import Hamburger from "hamburger-react";
import "./Navbar.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width:"500px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "transparent",
  },
};

Modal.setAppElement("#root");

function Navbar() {
  const location = useLocation();
  const [isSmall, setScreen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      closeModal();
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    const { innerWidth } = window;
    if (innerWidth <= 768) {
      setScreen(true);
    }
  }, []);

  const dropDown = () => {
    if (isSmall) {
      const links = document.querySelector(".nav-links");
      if (toggle) {
        links.classList.remove("hidden");
        setToggle(!toggle);
      } else {
        links.classList.add("hidden");
        setToggle(true);
      }
    }
  };

  useEffect(() => {
    if (isSmall) {
      const links = document.querySelector(".nav-links");
      if (toggle) {
        links.classList.remove("hidden");
        setToggle(!toggle);
      } else {
        links.classList.add("hidden");
        setToggle(true);
      }
    }
  }, []);

  return (
    <>
    {/*
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
      
      
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-field">
            <h2>LOGIN - IN</h2>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-field">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </form>
      
      
      </Modal>
      */}
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
            <button className="login-button" onClick={openModal}>
              login{" "}
              <img src={require("./assets/login-white.png")} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
