import React, { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
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

  const calculateIconPosition = (index, totalIcons, radius) => {
    const angle = (index / totalIcons) * 2 * Math.PI;
    // const centerX = window.innerWidth / 2;
    // const centerY = window.innerHeight / 2;
    const x = 0 + radius * Math.cos(angle);
    const y = 0 + radius * Math.sin(angle);
    return { x, y };
  };

  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  const colors = ["#ffff"];

  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();

  return (
    <>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>

      <div className="home-container">
        <div className="content-wrapper">
          <div className="home-title">
            <p className="main-title">
              <span className="cap-letter">M</span>icrosoft
            </p>
            <p>
              technincal <br /> community
            </p>
            <div className="line"></div>
            <div className="hero-buttons">
              <button className="register-button">
                register <span className="arrow-right">&#x2192;</span>
              </button>
              <button className="see-button">
                see more <span className="arrow-right">&#x2192;</span>
              </button>
            </div>
          </div>

          <div className="logo-section">
            <img
              src={require("./assets/Mtc.png")}
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
                      src={require(`./assets/${item.name}.png`)}
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
