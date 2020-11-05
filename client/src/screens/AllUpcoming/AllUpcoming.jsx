import React, { useState, useEffect } from "react";
import "./AllUpcoming.css";
import { getEvents } from "../../services/events";
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
              <img
                className="add-icon"
                src="https://i.imgur.com/rYgXM9m.png"
                alt="add"
              />
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
            </div>
          ))}
        </div>
      </UniversalLayout>
    </div>
  );
};

export default AllUpcoming;
