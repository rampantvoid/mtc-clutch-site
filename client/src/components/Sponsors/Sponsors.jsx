import React from "react";
import "./Sponsors.css";

function Sponsors() {
  const sponsors = [
    {
      image: "/sponsors/zuno.png",
      name: "Zuno",
      description:
        "Zuno is a platform that offers paid internships and jobs for freshers. With thousands of openings on our platform, we are on our way to helping students and fresh graduates find the right career opportunities to kickstart their careers.",
    },

    {
      image: "/sponsors/wayspire.png",
      name: "Wayspire",
      description:
        "WAYSPIRE ED-TECH PVT LTD is a dedicated E-learning platform to creating a community of lifelong learners. An E-learning platform with the goal of competence to students for the workforce and assisting you in landing your desired Job/ University",
    },
    {
      image: "/sponsors/coding-ninja.png",
      name: "Coding Ninjas",
      description:
        "Coding Ninjas is a place that trains passionate people in various technologies. Our core programs are intensive, immersive training that transforms people into outstanding developers.",
    },
  ];
  return (
    <>
      <div className="sponsors-container">
        <div className="sponsors-wrapper">
          <div className="sponsors-title">
            <h1>our sponsors</h1>
            <h2>uniting talent, fueling innovation</h2>
          </div>
          <div className="sponsor-content">
            {sponsors.map((sponsor) => (
              <div className="sponsor-item">
                <div className="sponsor-item-content front">
                  <img src={sponsor.image} alt={sponsor.name} />
                </div>

                <div className="sponsor-item-content back">
                  <p>{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
