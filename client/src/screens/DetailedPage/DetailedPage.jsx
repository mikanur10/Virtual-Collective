import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
    <div id="">
      <img class="" src={event.imgUrl} alt={event.name} />
      <div class="">
        <h3>{event.name}</h3>
        <h4>({event.description})</h4>
        <p>{event.date}</p>
        <p>{event.time}</p>
      </div>
    </div>
  );
}
export default DetailedPage;
