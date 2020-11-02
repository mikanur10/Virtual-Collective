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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default EventCarousel;
