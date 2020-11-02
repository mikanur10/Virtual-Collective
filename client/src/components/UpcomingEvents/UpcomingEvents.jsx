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

        )}
    </div>
  );
};

export default UpcomingEvents;
