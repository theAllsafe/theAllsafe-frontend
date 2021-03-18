import React from 'react';
import './FullScreenSlider.css';

import slider1 from './add-slider/1.jpg';
import slider2 from './add-slider/2.jpg';
import slider3 from './add-slider/3.JPG';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
function FullScreenSlider() {
  return (
    <div className="carouselContainer">
      <Carousel>
        <Carousel.Item className="c_item">
          <img src={slider1} alt="First slide" />
          <button className="exploreBtn">Explore Now</button>
        </Carousel.Item>

        <Carousel.Item className="c_item">
          <img src={slider2} alt="Second slide" />

          <button className="exploreBtn">Explore Now</button>
        </Carousel.Item>
        <Carousel.Item className="c_item">
          <img src={slider3} alt="Third slide" className="d-block w-100" />

          <button className="exploreBtn">Explore Now</button>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FullScreenSlider;
