import React from "react";
import "./TeamCard.css";

const TeamCard = ({ image, name, position, linkedinID }) => {
  return (
    <div className="team-card-container">
      <div className="team-card-wrapper">
        <img src={image} alt="" className="team-card-img" />
        <p
          style={{
            fontSize: "18px",
            fontWeight: "200",
            letterSpacing: "2px",
            width: "100%",
            margin: "0px",
          }}
        >
          {name}
        </p>

        <p
          style={{
            fontSize: "15px",
            fontWeight: "200",
            letterSpacing: "2px",
            width: "100%",
            margin: "0px",
          }}
        >
          {position}
        </p>

        <div
          style={{
            width: "30%",
            borderTop: "3px solid white",
          }}
        ></div>

        <a href={linkedinID} target="_blank">
          <img src="/linkedin.png" alt="" className="team-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
