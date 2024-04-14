import React from "react";
import "./onevent.css";
import Countdown from "react-countdown";

const OngoingEvent = () => {
  const [time, setTime] = React.useState();
  return (
    <div className="one-event">
      <div className="one-wrapper">
        <h1 className="one-counter">
          <Countdown date={new Date("Thu Apr 18 2024").getTime()}></Countdown>
        </h1>
        <h1 className="one-heading">TECH FUSE 2.0</h1>
        <div className="one-content-wrapper">
          <img src="/Techfuse 2.0.png" alt="" className="one-img" />
          <div>
            <p className="one-content">
              Embark on an exciting journey into the world of Advanced Database
              Management Systems (ADBMS) with MTC! Join us on April 18th from
              3:00 PM to 5:00 PM for TechFuse 2.0, a dynamic event crafted to
              deepen your understanding of ADBMS. Led by our esteemed president,
              Mr. Vibhor Minocha, each session promises insightful discussions,
              interactive engagement, and invaluable insights into the latest
              advancements in the field. <br /> <br /> In addition to ADBMS,
              TechFuse 2.0 shines a spotlight on placement-related challenges
              through engaging questions and quizzes. This unique approach not
              only provides a comprehensive understanding of ADBMS but also
              equips participants with practical skills to tackle real-world
              scenarios, enhancing career prospects. <br /> <br /> Active
              participation from enthusiastic individuals keen on enhancing
              their skills and knowledge in database management is encouraged.
              Register now to secure your spot at TechFuse 2.0, ensuring a
              seamless and organized experience for all attendees. <br /> <br />{" "}
              Join us as we embark on this enlightening journey at TechFuse 2.0,
              shaping the future of database management together.
            </p>
            <button className="one-button">
              <a href="https://forms.gle/1rJcb4tbH2x5qBnx5">
              Register Now
              </a>              
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingEvent;
