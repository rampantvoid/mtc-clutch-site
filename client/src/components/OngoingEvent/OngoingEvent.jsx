import React from "react";
import "./onevent.css";
import Countdown from "react-countdown";

const OngoingEvent = () => {
  const [time, setTime] = React.useState();
  return (
    <div className="one-event">
      <div className="one-wrapper">
        <h1 className="one-counter">
          <Countdown date={new Date("Mon 10 June 2024").getTime()}></Countdown>
        </h1>
        <h1 className="one-heading">COGNITION 3.0</h1>
        <div className="one-content-wrapper">
          <img src="/Assets/cognition 3.0.jpeg" alt="" className="one-img" />
          <div>
            <p className="one-content">
            <h1>Cognition 3.0: Machine Learning Bootcamp</h1>
            <p style={{fontSize: "20px"}}><b>Start Date&nbsp;&nbsp;: </b>&nbsp;June 10th</p>
            <p style={{fontSize: "20px"}}><b>Schedule:</b></p>
            <p style={{fontSize: "15px"}}>- Classes will be held over four weeks, three days a week.</p>
            <p style={{fontSize: "15px"}}>- The final week is dedicated to working on a project.</p>

            <p style={{fontSize: "20px"}}><b>Extra Help:</b></p><p>We will have weekly Q&A sessions to answer any questions you have and help you understand the material better.</p>

            <p style={{fontSize: "20px"}}><b>What You Will Learn:</b></p>
            <p style={{fontSize: "15px"}}>- You will start with an introduction to Machine Learning concepts.</p>
            <p style={{fontSize: "15px"}}>- You will get hands-on experience with popular ML algorithms.</p>
            <p style={{fontSize: "15px"}}>- You will learn practical skills in Python and how to use ML libraries like Scikit-learn.</p>
            <p style={{fontSize: "15px"}}>- You will learn how to apply Machine Learning techniques to solve real-world problems.</p>

<p style={{fontSize: "20px"}}><b>Who Can Join:</b></p><p>This bootcamp is open to everyone, including students from UPES and other universities or colleges. You do not need to have any prior knowledge of Machine Learning; you just need to be willing to learn.</p>

<p style={{fontSize: "20px"}}><b>Why Join?</b></p>
  <p>- You will build a solid foundation in Machine Learning.</p>
   <p>- You will work on a real project that you can showcase to others.</p>
   <p>- You will receive a certificate upon course completion.</p>
   <p>- You will boost your resume with in-demand skills.</p>


<p style={{fontSize: "20px"}}><b>For more details, contact</b></p>
<p>Hardik Raj Kapoor(IO): 9076698002</p>
<p>Vedanshi Samant (JS): 6394888851</p>
            </p>
            <button className="one-button">
              <a href="https://forms.gle/4mcjDnNBhb3jUksMA">
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
