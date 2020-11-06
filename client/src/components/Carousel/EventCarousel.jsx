import React from "react";
import { Carousel } from "react-bootstrap";

function EventCarousel(props) {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            width={998}
            height={500}
            className="d-block w-100"
            src="https://i.imgur.com/miLp4Sz.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The History of Jeff Koons</h3>
            <p>10/27 @ 11:00am</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={998}
            height={500}
            className="d-block w-100"
            src=" https://i.imgur.com/skxlBJw.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>MET Virtual Walk-Through</h3>
            <p>10/21 @ 4:00pm</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={998}
            height={500}
            className="d-block w-100"
            src="https://i.imgur.com/hS4n75H.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>James Turrel Lecture</h3>
            <p>10/10 @ 2pm</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default EventCarousel;
