import React, { useState, useEffect } from "react";
import "./About.css";

const wordsToShow = ["COMMUNITY", "LEARNERS", "FUTURE", "LEADERS"];

function About() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setShowWord(false);

      setTimeout(() => {
        setCurrentWordIndex(
          (prevIndex) => (prevIndex + 1) % wordsToShow.length
        );
        setShowWord(true);
      }, 500); // Adjust the timing for word change
    }, 2000); // Adjust the interval between words

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <>
      <div className="about-container" id="about">
        <div className="about-wrapper">
          <div className="abt-img-wrapper">
            <div className="empty-div ">
              <div
                className="abt-img-glass gradient-border"
                data-aos="fade-right"
              >
                <img src="/about.JPG" alt="" />
              </div>
            </div>
          </div>
          <div className="abt-content-wrapper" data-aos="zoom-in">
            <h1 className="abt-heading">who are we?</h1>

            <h2
              className={
                showWord ? "generate-response animate" : "generate-response"
              }
            >
              {wordsToShow[currentWordIndex]}
            </h2>

            <p>
              Microsoft Technical Community was established in February 2018
              with the vision of “Innovating, Inventing and Improvising” to
              educate fellow computer science enthusiasts about various aspects
              of the technical world. The goal was and is to create
              professionals out of amateurs and to teach not just Microsoft
              technologies but anything that is required for students to excel
              in their careers. We have come a long way since then, and still
              have many more goals to reach. Microsoft Technical Community only
              focuses on technical events and approaches them with complete
              professionalism. ‘Pathshala’ sessions, ‘Career Pathway’ sessions,
              ‘Buggymania’ and ‘Career Drive’ our main flagship event are just
              some of the events we conduct over a year with the sole purpose of
              creating better IT professionals. The team at Microsoft Technical
              Community is full of hard-working and professional individuals,
              who are always learning and teaching something new.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
