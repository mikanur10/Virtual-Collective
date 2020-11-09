import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./DetailedPage.css";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";
import { getEvent, deleteEvent, updateEvent } from "../../services/events";

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
  }, [_id]);

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

  return (
    <UniversalLayout>
      <div>
        <div>
          <Link to="/events/arts">
            <p className="back-button">&#60; ARTS</p>
          </Link>
        </div>
        <div id="detail-page">
          <img className="detail-image" src={event.imgUrl} alt={event.title} />
          <div className="detail-container">
            <h3 className="detail-name">
              {event.title}
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
          <img
            onClick={() => { handleFavorite(event) }}
            className="detail-heart"
            src={event.favorite === true ? "https://i.imgur.com/95TaJ6f.png" : "https://i.imgur.com/dHFsXQ4.png"}
            alt="heart"
          />
        <div className="button-container">
          <Link to={`/events/${event._id}/event`}>
            <button className="waiting-room">JOIN WAITING ROOM</button>
          </Link>
        </div>
        <div className="delete-edit">
          <Link to="/events/arts">
            <button
              className="delete-button"
              onClick={() => deleteEvent(event._id)}
            >
              Delete
            </button>
          </Link>

          <button className="edit-button">
            <Link className="edit-link" to={`/events/${event._id}/edit`}>
              Edit
            </Link>
          </button>
        </div>
      </div>
    </UniversalLayout>
  );
}
export default DetailedPage;
