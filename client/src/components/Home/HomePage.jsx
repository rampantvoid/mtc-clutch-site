import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function HomePage() {
  const navigate = useNavigate();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const techIcons = [
    { name: "github", radius: 250 },
    { name: "nodejs", radius: 200 },
    { name: "nextjs", radius: 250 },
    { name: "mongo", radius: 200 },
    { name: "reactjs", radius: 250 },
    { name: "firebase", radius: 200 },
    { name: "docker", radius: 300 },
    { name: "html", radius: 250 },
    { name: "css", radius: 220 },
  ];

  const [spreadIcons, setSpreadIcons] = useState(false);

  useEffect(() => {
    // Delay the animation to give time for the page to load
    setTimeout(() => {
      setSpreadIcons(true);
    }, 100);
  }, []);


    // Add event listener to disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup the event listener on component unmount


  const calculateIconPosition = (index, totalIcons, radius) => {
    const angle = (index / totalIcons) * 2 * Math.PI;
    // const centerX = window.innerWidth / 2;
    // const centerY = window.innerHeight / 2;
    const x = 0 + radius * Math.cos(angle);
    const y = 0 + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <>

      <video autoPlay muted loop id="myVideo" className="bgVideo" controls>
        <source src="bgVideo.mp4" type="video/mp4" />
      </video>
      <div className="overlay-sm"></div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="registration-closed-modal">
          <h2
            ref={(_subtitle) => (subtitle = _subtitle)}
            style={{ color: "red", marginTop: "0px" }}
          >
            Registrations Closed
          </h2>
          <p>Registrations are currently closed. Please check again later.</p>
          <button onClick={closeModal} className="close-btn">
            close
          </button>
        </div>
      </Modal>
      <div className="home-container">
        {/* <div className="absolute">
          <div className="absolute inset-0 justify-center">
            <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
            <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
            <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
          </div>
        </div> */}
        <div className="content-wrapper">
          <div
            className="home-title-sm"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <p>Microsoft</p>
            <p>Technical</p>
            <p>Community</p>
            <div className="hero-buttons">
            {/*

             <button className="register-button">
                register <span className="arrow-right">&#x2192;</span>
              </button>  
          
            */}

             <button className="register-button" onClick={()=> navigate("/current-event")}>
                Tech Fuse 2.0 <span className="arrow-right">&#x2192;</span>
              </button>
              
               
              <button className="see-button">
                see more <span className="arrow-right">&#x2192;</span>
              </button>
            </div>
          </div>
          <div
            className="home-title"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <p className="main-title">
              <span className="cap-letter">M</span>icrosoft
            </p>
            <p>
              technical <br /> community
            </p>
            <div className="line"></div>
            <div className="hero-buttons">
              {/* <Link to="/current-event" className="register-button"> */}
              <button className="register-button" onClick={()=> navigate("/current-event")}>
                COGNITION 3.0<span className="arrow-right">&#x2192;</span>
              </button>
              {/* </Link> */}
              <AnchorLink href="#about" className="seemore">
                <button className="see-button">
                  see more <span className="arrow-right">&#x2192;</span>
                </button>
              </AnchorLink>
            </div>
          </div>

          <div
            className="logo-section"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <img
              src={"Assets/homeAssets/Mtc.png"}
              alt="Microsoft Logo"
              className="main-logo"
              style={{
                animation: "hover 3s ease-in-out infinite",
              }}
            />

            <div className="tech-icons">
              {techIcons.map((item, index) => {
                const position = calculateIconPosition(
                  index,
                  techIcons.length,
                  item.radius
                );
                return (
                  <div
                    className={`apply-hover`}
                    style={{
                      animation: "hover 3.2s ease-in-out infinite",
                    }}
                  >
                    <img
                      src={`Assets/homeAssets/${item.name}.png`}
                      alt={item.name}
                      key={index}
                      className={`icon-hover`}
                      style={{
                        transform: spreadIcons
                          ? `translate(${position.x}px, ${position.y}px)`
                          : "translate(-10%, -10%)",
                        transition: "all 0.5s ease-in-out",
                        //   animation: "pulse 1s ease-in-out infinite",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
