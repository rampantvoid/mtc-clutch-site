import React from "react";
import "./Team.css";
import TeamCard from "../TeamCard/TeamCard";

const facultyCoordinators = [
  {
    name: "Ajay Kumar",
    image: "/team_img/Ajay.jpeg",
    linkedinID:
      "https://www.linkedin.com/in/ajay-kumar-71267820?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Keshav Sinha",
    image: "/team_img/keshav.jpeg",
    linkedinID:
      "https://www.linkedin.com/in/dr-keshav-sinha-a764b01ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];


const StudentCoordinator = [
  {
    name: "Aditya Kumar",
    image: "/team_img/aditya.png",
    linkedinID: "https://www.linkedin.com/in/aditya-kumar-220053208/",
  },
  {
    name: "Sanidhya Soni",
    image: "/team_img/sanidhya soni.png",
    linkedinID: "https://www.linkedin.com/in/sanidhya-soni/",
  },
  {
    name: "Yash Raj Singh",
    image: "/team_img/y1.png",
    linkedinID: "https://www.linkedin.com/in/yash-raj-singh-yrs/",
  },
  {
    name: "Rishabh Dhanger",
    image: "/team_img/rishabh.png",
    linkedinID: "https://www.linkedin.com/in/rishabh-dhangar/",
  },
  {
    name: "Tanish Garg",
    image: "/team_img/tanish.JPG",
    linkedinID:
      "https://www.linkedin.com/in/tanish-garg-5114aa236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];


const Management = [
  {
    name: "Vibhor Minocha",
    position: "President",
    image: "/team_img/Vibhor_Minocha.jpg",
    linkedinID: "https://www.linkedin.com/in/vibhor-minocha-513b32220/",
  },
  {
    name: "Siddhant Srivastava",
    position: "Vice-President",
    image: "/team_img/Screenshot from 2024-02-04 14-09-46.png",
    linkedinID: "https://www.linkedin.com/in/siddhantsrivastava21/",
  },
  {
    name: "Ananya Singh",
    position: "Director of Operaion",
    image: "/team_img/Ananya_singh.jpg",
    linkedinID:
      "https://www.linkedin.com/in/ananya-singh-15r25-8r1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Rajat Bisht",
    position: "Managerial Director",
    image: "/team_img/Rajat_Bisht.jpg",
    linkedinID: "https://www.linkedin.com/in/rajat-bisht-25b208237",
  },
  {
    name: "Mimansa Pathania",
    position: "Treasurer",
    image: "/team_img/miamansa.JPG",
    linkedinID: "https://www.linkedin.com/in/mimansa-pathania-3b38a2223/",
  },
];

const Advisor = [
  {
    name: "Hamzaa Bin Saleem",
    position: "Event Head Advisor",
    image: "/team_img/hamza.jpeg",
    linkedinID: "https://www.linkedin.com/in/hamza-bin-saleem-b80917241/",
  },
  {
    name: "Insiya Rizvi",
    position: "Management Advisor",
    image: "/team_img/Insiya.JPG",
    linkedinID: "https://www.linkedin.com/in/insiya-rizvi-118702178/",
  },
  {
    name: "Shresth Pandey",
    position: "Public Relation Advisor",
    image: "/team_img/Shresth_Pandey.png",
    linkedinID: "https://www.linkedin.com/in/shresth-pandey-488b10229/",
  },
];

const WorkingTeam = [
  {
    name: "Hardik Raj Kappor",
    position: "Internal Operation Head ",
    image: "/team_img/Hardik.png",
    linkedinID:
      "https://www.linkedin.com/in/hardik-raj-kapoor-03a680183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Vedanshi Samant",
    position: "Joint-Secrectry",
    image: "/team_img/Vedanshi.JPG",
    linkedinID: "https://www.linkedin.com/in/vedanshi-samant-709879278/",
  },
  {
    name: "Priyanshu Butola ",
    position: "Technical Head",
    image: "/team_img/priyanshu.jpg",
    linkedinID:
      "https://www.linkedin.com/in/priyanshu-butola?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Vansh Raj Chauhan",
    position: "Technical Head",
    image: "/team_img/Vansh_Raj_Chauhan.jpg",
    linkedinID: "https://www.linkedin.com/in/vansh-raj-chauhan-64b50a258/",
  },
  {
    name: "Shambhavee Srivastav",
    position: "Technical Associate Head",
    image: "/team_img/Shambhavee_Srivastava.jpg",
    linkedinID: "https://www.linkedin.com/in/shambhavee-srivastava-973494278/",
  },
  {
    name: "Sanya Sinha",
    position: "Design Head",
    image: "/team_img/Sanya_Sinha.jpg",
    linkedinID:
      "https://www.linkedin.com/in/sanya-sinha-a859ab244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Anish",
    position: "Design Associate Head",
    image: "/team_img/Anish.jpg",
    linkedinID: "https://www.upesmtc.com/ ",
  },
  {
    name: "Samriddh Sharma",
    position: "Management and Record Head",
    image: "/team_img/samriddh .JPG",
    linkedinID:
      "https://www.linkedin.com/in/samriddh-sharma-754565258/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Yashpal Singh",
    position: "Management and Record Associate Head",
    image: "/team_img/yashpal.JPG",
    linkedinID:
      "https://www.linkedin.com/in/yashpal-singh-230072262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Isha Yadav",
    position: "Management and Record Associate Head",
    image: "/team_img/Isha_Yadav.jpg",
    linkedinID:
      " https://www.linkedin.com/in/isha-yadav-4ab73a2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Swati pal ",
    position: "Editorial Head",
    image: "/team_img/swati_Pal.jpg",
    linkedinID: "http://www.linkedin.com/in/swati-pal-upes",
  },
  {
    name: "Srishti Gupta ",
    position: "Editorial Associate Head ",
    image: "/team_img/Srishti_Gupta.jpg",
    linkedinID: "https://www.linkedin.com/in/srishti-gupta-48b2441bb/",
  },

  {
    name: "Kunal Sharma ",
    position: "Editorial Associate Head",
    image: "/team_img/Kunal_Sharma.jpg",
    linkedinID:
      "https://www.linkedin.com/in/kunal-shubh-sharma-6303a72a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Chaitanya ",
    position: "Public Relation Head ",
    image: "/team_img/chetanya.JPG",
    linkedinID: "https://www.linkedin.com/in/chetanya-jain-838016210/",
  },
];

const Alumni = [
  {
    name: "Rashi Trikha",
    image: "/team_img/Rashi.jpg",
    linkedinID:
      "https://www.linkedin.com/in/rashi-trikha-0832391a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Kartikey Khanna",
    image: "/team_img/Kartikeya.jpg",
    linkedinID:
      "https://www.linkedin.com/in/kartikeya-khanna-1274b7194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Vishal Gupta",
    image: "/team_img/Vishal1.webp",
    linkedinID:
      "https://www.linkedin.com/in/vishal-gupta-6b6123194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
                  position={faculty.position}
                  image={faculty.image}
                  linkedinID={faculty.linkedinID}
                />
              ))}
            </div>

            <h2>Our Student Coordinator</h2>

<div className="wrapper-div">
  {StudentCoordinator.map((sc) => (
    <TeamCard
      name={sc.name}
      image={sc.image}
      linkedinID={sc.linkedinID}
    />
  ))}
</div>

            <h2>Management Team</h2>

            <div className="wrapper-div">
              {Management.map((management) => (
                <TeamCard
                  name={management.name}
                  position={management.position}
                  image={management.image}
                  linkedinID={management.linkedinID}
                />
              ))}
            </div>

            <h2>Advisory Team</h2>

            <div className="wrapper-div">
              {Advisor.map((advisor) => (
                <TeamCard
                  name={advisor.name}
                  position={advisor.position}
                  image={advisor.image}
                  linkedinID={advisor.linkedinID}
                />
              ))}
            </div>

            <h2>Working Team</h2>

            <div className="wrapper-div">
              {WorkingTeam.map((wt) => (
                <TeamCard
                  name={wt.name}
                  position={wt.position}
                  image={wt.image}
                  linkedinID={wt.linkedinID}
                />
              ))}
            </div>

         

            <h2>Our Alumni</h2>

            <div className="wrapper-div">
              {Alumni.map((student) => (
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
