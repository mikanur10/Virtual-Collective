import React, { useState, useEffect } from "react";
import "./FavoritesPage.css";
import { getEvents, updateEvent } from "../../services/events";
import { useParams, Link } from "react-router-dom";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";

const FavoritesPage = (props) => {
  const {params} = useParams();
  const [events, setEvents] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const [eventFavorite, setEventFavorite] = useState({
    favorite: false,
})

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents();
      console.log(response);
      setEvents(response);
      setLoaded(true);
    };
    fetchEvents();
  }, []);

  const handleFavorite = async (event) => {
      let { _id } = props.match.params
      const updated = await updateEvent(_id, events)
      setEventFavorite(updated)
    if (eventFavorite.favorite === false) {
        console.log(eventFavorite);
        return eventFavorite.favorite = true;
      }
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
              <img className="favorite-image" src={event.imgUrl} />
              <Link to={`/events/${event._id}`}>
                <div className="favorite-items">
                  <p className="favorite-name">{event.name}</p>
                  <p className="favorite-date">
                    {event.date} @ {event.time}
                  </p>
                  <p className="favorite-subCategory">{event.subCategory}</p>
                </div>
              </Link>
              <button
                className="heart-button-container"
                onClick={handleFavorite}>
                <img
                  className="favorite-heart"
                  src="https://i.imgur.com/dHFsXQ4.png"
                  alt="heart"
                />
              </button>
            </div>
          ))}
        </div>
      </UniversalLayout>
    </div>
  );
};

export default FavoritesPage;
