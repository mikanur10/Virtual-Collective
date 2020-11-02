import React, { useState, useEffect } from "react";
import "./UpcomingEvents.css";
import { getEvents } from "../../services/events";
import { useParams } from "react-router-dom";

const UpcomingEvents = () => {
  const params = useParams();
  const [events, setEvents] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await getEvents();
      console.log(response);
      setEvents(response);
      setLoaded(true);
    };
    fetchEvent();
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  const filterEvents = events.filter((event) => event.category === "Arts");
  return (
    <div className="all-content">
      <div>
        <h3 className="upcoming-title">UPCOMING</h3>
      </div>
      {filterEvents.map((event) => (
        <div className="upcoming-events">
          <img className="image" src={event.imgUrl} />
          <div className="info">
            <p className="name">{event.name}</p>
            <p className="date">
              {event.date} @ {event.time}
            </p>
            <p className="subCategory">{event.subCategory}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
