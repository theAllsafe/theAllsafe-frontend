import React from 'react';
import './OurVision.css';
import webdev from '../OurOfferings/res/web-development.png';
import android from '../OurOfferings/res/android.png';
import Fade from 'react-reveal/Fade';

export default function OurVision() {
  return (
    <section className="myvision">
      <div class="heading">
        <Fade top>
          <h2>
            WHY <span className="ship">theAllsafe ?</span>
          </h2>
        </Fade>
      </div>
      <div class="about-home">
        <div class="container">
          <div className="row" style={{ marginTop: '-5em' }}>
            <Fade left>
              <div className="col-md-3">
                <div className="service-home-box">
                  <h4 align={'center'}>
                    Our Vision
                    <hr />
                  </h4>

                  <img
                    src={webdev}
                    alt="web app development company Spain and Poland"
                  />
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="col-md-3">
                <div className="service-home-box">
                  <h4 align={'center'}>
                    Our Mission
                    <hr />
                  </h4>

                  <img
                    src={android}
                    alt="Nimble AppGenie - Mobile app development services Germany and Texas"
                  />
                </div>
              </div>
            </Fade>

            <div className="col-md-6">
              <Fade right>
                <p className="para-15">
                  We believe in providing smart and innovative mobile and web
                  solutions that will help businesses to solve the problems of
                  their customers. We not only build the software, but we
                  strategically analyse the project, to identify how each
                  business can maximise the value it offers to their customers.
                </p>

                <p className="para-15">
                  We believe in providing smart and innovative mobile and web
                  solutions that will help businesses to solve the problems of
                  their customers. We not only build the software, but we
                  strategically analyse the project, to identify how each
                  business can maximise the value it offers to their customers.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
