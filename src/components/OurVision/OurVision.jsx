import React from 'react';
import './OurVision.css';
import man from './man.png';
import target from './target.png';
import Fade from 'react-reveal/Fade';

export default function OurVision() {
  return (
    <div className="myvision">
      <div class="heading">
        <Fade top>
          <h2>
            WHY <span className="ship">theAllsafe ?</span>
          </h2>
        </Fade>
      </div>
      <div className="wrapper">
        <div className="mv_left">
          <img src={man} alt="Man Image" />
        </div>
        <div className="mv_right">
          <p>
            We believe in providing smart and innovative mobile and web
            solutions that will help businesses to solve the problems of their
            customers. We not only build the software, but we strategically
            analyse the project, to identify how each business can maximise the
            value it offers to their customers.
            <br />
            <br /> We believe in providing smart and innovative mobile and web
            solutions that will help businesses to solve the problems of their
            customers. We not only build the software, but we strategically
            analyse the project, to identify how each business can maximise the
            value it offers to their customers.
          </p>
          <div className="boxes">
            <div className="mission">
              <div className="imgBox"></div>
              <h3>Our Mission</h3>
            </div>
            <div className="vision">
              <div className="imgBox"></div>
              <h3>Our Vision</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
