import React, { useState, useEffect } from "react";
import "./AllUpcoming.css";
import { getEvents, updateEvent } from "../../services/events";
import { Link } from "react-router-dom";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";

const AllUpcoming = () => {
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

  return (
    <div>
      <UniversalLayout>
        <div className="all-genre-content">
          <div className="upcoming-add">
            <h3 className="upcoming-title">ALL UPCOMING EVENTS</h3>
            <Link to="/create">
              <p className="add-icon">+</p>
            </Link>
          </div>
          {events.map((event) => (
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
      </UniversalLayout>
    </div>
  );
};

export default AllUpcoming;
