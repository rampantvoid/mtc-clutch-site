import React from "react";
import "./Team.css";

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
            <div className="img-contianer">
              <div>
                <img src="/team_img/keshav.jpeg" alt="" />
                <p>Keshav Sinha</p>
              </div>
              <div>
                <img src="/team_img/ajay.jpeg" alt="" />
                <p>Ajay Kumar</p>
              </div>
            </div>

            <h2>President</h2>
            <div className="img-contianer">
              <div>
                <img src="/logo192.png" alt="" />
                <p>Aditya Kumar</p>
              </div>
            </div>

            <h2>Student Coordinators</h2>
            <div className="img-contianer">
              <div>
                <img src="/team_img/Rashi.jpg" alt="" />
                <p>Rashi Trikha</p>
              </div>
              <div>
                <img src="/team_img/Kartikeya.jpg" alt="" />
                <p>Kartikey Khanna</p>
              </div>
              <div>
                <img src="/team_img/Vishal1.webp" alt="" />
                <p>Vishal Gupta</p>
              </div>
            </div>

            <h2>Technical Team</h2>
            <div className="img-contianer">
              <div>
                <img src="/team_img/Rajat.jpeg" alt="" />
                <p>Rajat Bisht</p>
                <p>HEAD</p>
              </div>
            </div>
            <div className="img-contianer">
              <div>
                <img src="/team_img/rohinnn.jpeg" alt="" />
                <p>Rohin Meharotra</p>
                <p>ASSOCIATE HEAD</p>
              </div>
              <div>
                <img src="/team_img/vanshhh.jpeg" alt="" />
                <p>Vansh Chauhan</p>
                <p>ASSOCIATE HEAD</p>
              </div>
            </div>

            <h2>Management & RECORDS Team</h2>
            <div className="img-contianer">
              <div>
                <img src="/logo192.png" alt="" />
                <p>Rajat Bisht</p>
                <p>HEAD</p>
              </div>
            </div>
            <div className="img-contianer">
              <div>
                <img src="/logo192.png" alt="" />
                <p>Rohin Meharotra</p>
                <p>ASSOCIATE HEAD</p>
              </div>
              <div>
                <img src="/logo192.png" alt="" />
                <p>Vansh Chauhan</p>
                <p>ASSOCIATE HEAD</p>
              </div>
            </div>

            <h2>Public relations Team</h2>
            <div className="img-contianer">
              <div>
                <img src="/logo192.png" alt="" />
                <p>Rajat Bisht</p>
                <p>HEAD</p>
              </div>
            </div>
            <div className="img-contianer">
              <div>
                <img src="/logo192.png" alt="" />
                <p>Rohin Meharotra</p>
                <p>ASSOCIATE HEAD</p>
              </div>
              <div>
                <img src="/logo192.png" alt="" />
                <p>Vansh Chauhan</p>
                <p>ASSOCIATE HEAD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
