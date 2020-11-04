import React, { useState, useEffect } from "react";
import "./FavoritesPage.css";
import { getEvents } from "../../services/events";
import { useParams, Link } from "react-router-dom";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";

const FavoritesPage = () => {
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
  const filterEvents = events.filter((event) => event.favorite === true);

  return (
      <div>
          <UniversalLayout>

    <div className="favorite-content">
      <div>
        <h3 className="favorite-title">FAVORITES</h3>
        
      </div>
      {filterEvents.map((event) => (
          <Link to={`/events/${event._id}`}>
          <div className="favorite-events">
            <img className="favorite-image" src={event.imgUrl} />
          <div className="favorite-items">
          
                <p className="favorite-name">{event.name}</p>
                <p className="favorite-date">{event.date} @ {event.time}</p>
                <p className="favorite-subCategory">{event.subCategory}</p>
          
          </div>
        </div>
          </Link>
      ))}
      </div>
      </UniversalLayout>
    </div>
  );
};

export default FavoritesPage;
