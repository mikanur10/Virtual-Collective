import React, { useState, useEffect } from "react";
import "./UpcomingEvents.css";
import { getEvents } from "../../services/events";
import { useParams, Link } from "react-router-dom";

const UpcomingEvents = () => {
  const params = useParams();
  const [events, setEvents] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      console.log(response);
      setEvents(response);
      setLoaded(true);
    };
    fetchEvents();
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  const filterEvents = events.filter((event) => event.category === "Arts");

  return (
    <div className="all-content">
      <div className="upcoming-add">
        <h3 className="upcoming-title">UPCOMING</h3>
        <Link to="/create">
          <img
            className="add-icon"
            src="https://i.imgur.com/rYgXM9m.png"
            alt="add"
          />
        </Link>
      </div>
      {filterEvents.map((event) => (
        <div className="upcoming-events">
          <Link to={`/events/${event._id}`}>
            <img className="image" src={event.imgUrl} />
          </Link>
          <div className="info">
            <p className="name">{event.name}</p>
            <p className="date">
              {event.date} @ {event.time}
            </p>
            <p className="subCategory">{event.subCategory}</p>
          </div>
          <button className="heart-button-container">
            <img
              className="heart"
              src="https://i.imgur.com/dHFsXQ4.png"
              alt="heart"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
