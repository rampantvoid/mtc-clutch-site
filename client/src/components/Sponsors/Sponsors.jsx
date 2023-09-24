import React from "react";
import "./Sponsors.css";

function Sponsors() {
  const sponsors = [
    {
      image: require("./assets/zuno.png"),
      name: "Zuno",
      description:
        "Coding Ninjas is a place that trains passionate people in various technologies. Our core programs are intensive, immersive training that transforms people into outstanding developers.",
    },

    {
      image: require("./assets/wayspire.png"),
      name: "Wayspire",
      description:
        "Coding Ninjas is a place that trains passionate people in various technologies. Our core programs are intensive, immersive training that transforms people into outstanding developers.",
    },
    {
      image: require("./assets/coding-ninja.png"),
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
                <img src={sponsor.image} alt={sponsor.name} />
                <div className="item-content">
                  <h3>{sponsor.name}</h3>
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
