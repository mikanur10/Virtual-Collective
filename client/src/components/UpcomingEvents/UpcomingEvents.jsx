import React, { useState, useEffect } from "react";
import "./UpcomingEvents.css";
import { getEvents } from "../../services/events";
import { useParams} from 'react-router-dom'

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
  const filterEvents = events.filter(event =>
    event.category === "Arts"
    );
  return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="bird-landing">
        {events && events.map(event =>
          // <Link to={`/bird/${event.name}`}>
          <img src={event.imgUrl} />
=======
    <div className="bird-landing">
      {events &&
        events.map(
          (event) => (
            // <Link to={`/bird/${event.name}`}>
            <img src={event.imgUrl} />
          )
>>>>>>> 83113f8013eb068f64d3a75602ad9b660b5474b8
          // </Link>
=======
      <div className="upcoming-events">
      {
        filterEvents.map(
            (event) => (
                
                <div>
                    <img src={event.imgUrl} />
                    <p>{event.name}</p>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.subCategory}</p>
             </div>
          )
>>>>>>> f38921f5de9314835548683fd6f5996347d1e334
        )}
    </div>
  );
};

export default UpcomingEvents;
