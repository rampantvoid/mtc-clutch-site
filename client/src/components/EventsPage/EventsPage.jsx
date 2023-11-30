import React from "react";
import "./EventsPage.css";
import EventCarousel from "../EventCarousel/EventCarousel.jsx";

function EventsPage() {
  return (
    <>
      <div className="events-container">
        <div className="events-wrapper">
          <div className="events-heading">
            <h1>past events</h1>
          </div>
          <div className="past-events">
            <EventCarousel />
          </div>
          {/* <button className="see-more">see more</button> */}
        </div>
      </div>
    </>
  );
}

export default EventsPage;
