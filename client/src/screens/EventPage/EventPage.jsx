import React from 'react';
import './EventPage.css'
import EventCarousel from '../../components/Carousel/EventCarousel'
import UniversalLayout from '../../components/shared/UniversalLayout/UniversalLayout'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';



function EventPage(props) {
  return (
    <UniversalLayout>
      <div className="art-header">
        <h3>ARTS</h3>
      </div>
      <div className="carousel">
        <EventCarousel />
      </div>
    <UpcomingEvents />
    </UniversalLayout>

  );
}

export default EventPage;