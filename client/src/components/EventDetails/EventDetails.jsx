import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { events } from "../../utils/events";

const EventDetails = ({ match }) => {
  const { id } = useParams();

  const currentEvent = events.find((event) => event.id === id);

  console.log(currentEvent);

  return (
    <div className="eventdetails-container">
      <div className="eventdetails-wrapper">
        {/* text section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="eventdetails-heading">{currentEvent.title}</p>
          <img
            src={currentEvent.image}
            alt="event image"
            className="event-detail-img"
          />
          <p className="event-description">{currentEvent.description}</p>

          <p
            className="about-event-heading"
            style={{
              textAlign: "center",
            }}
          >
            About Event
          </p>
          <div className="pink-line"></div>
          <p className="about-event-details">{currentEvent.details_1}</p>
          <p className="about-event-details">{currentEvent.details_2}</p>
          <div className="wrap-event">It's a wrap</div>
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
