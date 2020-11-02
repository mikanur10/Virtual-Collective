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
<<<<<<< HEAD

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
=======
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
>>>>>>> ebeab156f6d33ced66458b98ab647ffb0ab62d14
    </div>
  );
};

export default UpcomingEvents;
