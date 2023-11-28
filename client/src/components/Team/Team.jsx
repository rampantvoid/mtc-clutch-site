import React from "react";
import "./Team.css";
import TeamCard from "../TeamCard/TeamCard";

const facultyCoordinators = [
  {
    name: "Ajay Kumar",
    image: "/team_img/Ajay.jpeg",
    linkedinID: "htttps://www.google.com",
  },
  {
    name: "Keshav Sinha",
    image: "/team_img/keshav.jpeg",
    linkedinID: "htttps://www.google.com",
  },
];

const studenCoordinators = [
  {
    name: "Rashi Trikha",
    image: "/team_img/Rashi.jpg",
    linkedinID: "htttps://www.google.com",
  },
  {
    name: "Kartikey Khanna",
    image: "/team_img/Kartikeya.jpg",
    linkedinID: "htttps://www.google.com",
  },
  {
    name: "Vishal Gupta",
    image: "/team_img/Vishal1.webp",
    linkedinID: "htttps://www.google.com",
  },
];

function Team() {
  return (
    <>
      <div className="team-container">
        <div className="team-wrapper">
          <div className="team-heading">
            <h1>Meet our team</h1>
            <h2>Our great minds behind fueling this community</h2>
          </div>

          <div className="card-container">
            <h2>Faculty Coordinators</h2>

            <div className="wrapper-div">
              {facultyCoordinators.map((faculty) => (
                <TeamCard
                  name={faculty.name}
                  image={faculty.image}
                  linkedinID={faculty.linkedinID}
                />
              ))}
            </div>

            <h2>President</h2>

            <div className="wrapper-div">
              <TeamCard
                name="Aditya Kumar"
                image="/team_img/Aditya.jpeg"
                linkedinID="google"
              />
            </div>

            <h2>Student Coordinators</h2>

            <div className="wrapper-div">
              {studenCoordinators.map((student) => (
                <TeamCard
                  name={student.name}
                  image={student.image}
                  linkedinID={student.linkedinID}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
