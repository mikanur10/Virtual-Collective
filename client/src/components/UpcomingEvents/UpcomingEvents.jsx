import React, { useState, useEffect } from "react";
import "./UpcomingEvents.css";
import { getEvents, updateEvent } from "../../services/events";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
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

  const handleFavorite = async (eventFavorite) => {
    console.log(eventFavorite);
      // const updated = await updateEvent(_id, events)
    if (eventFavorite.favorite === false) {
      let updatedEvent = {
        ...eventFavorite,
        favorite: true
      }
      await updateEvent(eventFavorite._id, updatedEvent)
    } else {
      let updatedEvent = {
        ...eventFavorite,
        favorite: false
      }
      await updateEvent(eventFavorite._id, updatedEvent)
    }
    window.location.reload()
  }

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const filterEvents = events.filter((event) => event.category === "Arts");

  return (
    <div className="all-content">
      <div className="upcoming-add">
        <h3 className="upcoming-title">UPCOMING</h3>
        <Link to="/create">
          {/* <img
            className="add-icon"
            src="https://i.imgur.com/rYgXM9m.png"
            alt="add"
          /> */}
          <p className="add-icon">+</p>
        </Link>
      </div>
      {filterEvents.map((event) => (
        <div className="upcoming-events">
          <Link to={`/events/${event._id}`}>
            <img className="image" src={event.imgUrl} alt="event" />
          </Link>
          <div className="info">
            <p className="name">{event.name}</p>
            <p className="date">
              {event.date} @ {event.time}
            </p>
            <p className="subCategory">{event.subCategory}</p>
          </div>
            <img
              onClick={() => { handleFavorite(event) }}
              className="heart"
              src={event.favorite === true ? "https://i.imgur.com/95TaJ6f.png" : "https://i.imgur.com/dHFsXQ4.png"}
              alt="heart"
            />
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
