import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./WaitingRoom.css";
import Layout from "../../components/shared/Layout/Layout";
import { getEvent } from "../../services/events";

function WaitingRoom(props) {
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

  return (
    <Layout>
      <div>
        <img className="event-image" src={event.imgUrl} alt={event.title} />
      </div>
    </Layout>
  );
}

export default WaitingRoom;
