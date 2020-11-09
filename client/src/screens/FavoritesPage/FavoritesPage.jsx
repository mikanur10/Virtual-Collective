import React, { useState, useEffect } from "react";
import "./FavoritesPage.css";
import { getEvents, updateEvent } from "../../services/events";
import { Link } from "react-router-dom";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";

const FavoritesPage = (props) => {
  const [events, setEvents] = useState([]);
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
  const filterEvents = events.filter((event) => event.favorite === true);

  return (
    <div>
      <UniversalLayout>
        <div className="favorite-content">
          <div>
            <h3 className="favorite-title">FAVORITES</h3>
          </div>
          {filterEvents.map((event) => (
            <div className="favorite-events">
              <img
                className="favorite-image"
                src={event.imgUrl}
                alt="favorite"
              />
              <Link to={`/events/${event._id}`}>
                <div className="favorite-items">
                  <p className="favorite-name">{event.name}</p>
                  <p className="favorite-date">
                    {event.date} @ {event.time}
                  </p>
                  <p className="favorite-subCategory">{event.subCategory}</p>
                </div>
              </Link>
                <img
                  onClick={() => { handleFavorite(event) }}
                  className="favorite-heart"
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

export default FavoritesPage;
