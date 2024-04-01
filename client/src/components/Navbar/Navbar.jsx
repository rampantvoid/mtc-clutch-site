import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import Hamburger from "hamburger-react";
import "./Navbar.css";

Modal.setAppElement("#root");


const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      onClose();
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
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
    </form>
  );
};

function Navbar() {
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      maxWidth: "500px",
      width: "100%",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <>
      <div className="login-wrapper">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          contentLabel="Login Pop-up"
        >
          <LoginForm onClose={() => setModalIsOpen(false)} />
        </Modal>
      </div>

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
            <button
              className="login-button"
              onClick={() => setModalIsOpen(true)}
            >
              Login <img src={require("./assets/login-white.png")} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
