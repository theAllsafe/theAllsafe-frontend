import React from 'react';
import './OurVision.css';
// import s1 from "./icon/s1.PNG";
// import s2 from "./icon/s2.PNG";
// import s3 from "./icon/s3.PNG";
// import s4 from "./icon/s4.PNG";
// import s5 from "./icon/s5.PNG";
// import s6 from "./icon/s6.PNG";
// import vision from "./icon/vision.png";
// import about from "./icon/about.gif";
// import mission from "./icon/mission.png";
// import goal from "./icon/goal.png";
// import success from "./icon/success.png";
// import "./OurVision.css";
import webdev from '../OurOfferings/res/web-development.png';
import android from '../OurOfferings/res/android.png';
// import ios from "../OurOfferings/res/ios.png";
// import ai from "../OurOfferings/res/ai-service.png";
// import maintain from "../OurOfferings/res/maintain.png";
// import uiux from "../OurOfferings/res/uiux.png";
import Fade from 'react-reveal/Fade';
// import Tada from "react-reveal/Tada";

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
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: '200',
                    lineHeight: '27px',
                    color: 'var(--gray-dark-color);',
                  }}
                >
                  We believe in providing smart and innovative mobile and web
                  solutions that will help businesses to solve the problems of
                  their customers. We not only build the software, but we
                  strategically analyse the project, to identify how each
                  business can maximise the value it offers to their customers.
                </p>

                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: '200',
                    lineHeight: '27px',
                    color: 'var(--gray-dark-color);',
                  }}
                >
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
