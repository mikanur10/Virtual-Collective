import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./DetailedPage.css";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";
import { getEvent } from "../../services/events";

function DetailedPage(props) {
  const { _id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async (id) => {
      const response = await getEvent(id);
      console.log(response);
      setEvent(response);
    };
    fetchEvent(_id);
  }, []);

  return (
    <UniversalLayout>
      <div>
        <div>
          <Link to="/events/arts">
            <p className="back-button">ARTS</p>
          </Link>
        </div>
        <div id="detail-page">
          <img className="detail-image" src={event.imgUrl} alt={event.name} />
          <div className="detail-container">
            <h3 className="detail-name">
              {event.name}: {event.title}
            </h3>
            <p className="descrip-title">
              <b>Event Description</b>
            </p>
            <p className="detail-descrip">{event.description}</p>
            <p className="date-title">
              <b>{event.subCategory} Date & Time</b>
            </p>
            <p className="detail-date">
              {event.date} @ {event.time}
            </p>
          </div>
        </div>
        <div className="button-container">
          <Link to={`/events/${event._id}/event`}>
            <button className="waiting-room">JOIN WAITING ROOM</button>
          </Link>
        </div>
      </div>
    </UniversalLayout>
  );
}
export default DetailedPage;
