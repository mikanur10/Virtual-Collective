import React from "react";
import "./EventPage.css";
import EventCarousel from "../../components/Carousel/EventCarousel";
import UniversalLayout from "../../components/shared/UniversalLayout/UniversalLayout";

function EventPage(props) {
  return (
    <UniversalLayout>
      <div className="art-header">
        <h3>ARTS</h3>
      </div>
      <div className="carousel">
        <EventCarousel />
      </div>
    </UniversalLayout>
  );
}

export default EventPage;
