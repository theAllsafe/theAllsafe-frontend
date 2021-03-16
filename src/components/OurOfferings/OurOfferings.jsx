import React from "react";
import "./OurOffering.css";
import android from "./res/android.png";
import ai from "./res/ai-service.png";
import ios from "./res/ios.png";
import maintain from "./res/maintain.png";
import uiux from "./res/uiux.png";
import webdev from "./res/web-development.png";
import Fade from "react-reveal/Fade";
//import Tada from "react-reveal/Tada";

function OurOfferings() {
  return (
    <section class="service-home">
      <hr style={{ marginTop: "-3rem", marginBottom: "3rem" }} />
      <div class="container">
        <div class="container heading">
          <Fade top>
            <h2>
              OUR <span className="ship">OFFERINGS</span>
            </h2>
          </Fade>
        </div>
        <div class="row" style={{ marginTop: "2em" }}>
          <div className="col-md-6">
            <Fade left>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "200",
                  lineHeight: "27px",
                  color: "var(--gray-dark-color);",
                }}
              >
                We believe in providing smart and innovative mobile and web
                solutions that will help businesses to solve the problems of
                their customers. We not only build the software, but we
                strategically analyse the project, to identify how each business
                can maximise the value it offers to their customers.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "200",
                  lineHeight: "27px",
                  color: "var(--gray-dark-color);",
                }}
              >
                We believe in providing smart and innovative mobile and web
                solutions that will help businesses to solve the problems of
                their customers. We not only build the software, but we
                strategically analyse the project, to identify how each business
                can maximise the value it offers to their customers.
              </p>
            </Fade>
          </div>

          <div class="col-md-3">
            <a href="/webdevelopment" style={{ textDecoration: "none" }}>
              <div class="service-home-box">
                <h4>
                  Web <br />
                  Development
                </h4>
                <a href="/webdevelopment" class="">
                  <i class="fa fa-plus"></i>
                </a>
                <img
                  src={webdev}
                  alt="web app development company Spain and Poland"
                />
              </div>
            </a>
          </div>

          <div class="col-md-3">
            <a href="/android-development" style={{ textDecoration: "none" }}>
              <div class="service-home-box">
                <h4>
                  Android App <br />
                  Development
                </h4>
                <a href="/android-development" class="">
                  <i class="fa fa-plus"></i>
                </a>
                <img
                  src={android}
                  alt="Nimble AppGenie - Mobile app development services Germany and Texas"
                />
              </div>
            </a>
          </div>

          <div class="col-md-3">
            <a href="/ios-development" style={{ textDecoration: "none" }}>
              <div class="service-home-box">
                <h4>
                  iOS App <br />
                  Development
                </h4>
                <a href="/ios-development" class="">
                  <i class="fa fa-plus"></i>
                </a>
                <img
                  src={ios}
                  alt="Top Graphic Designers in Houston and Germany"
                />
              </div>
            </a>
          </div>

          <div class="col-md-3">
            <a
              href="/artificial-intelligence"
              style={{ textDecoration: "none" }}
            >
              <div class="service-home-box">
                <h4>
                  Artificial <br />
                  Intelligence
                </h4>
                <a href="/artificial-intelligence">
                  <i class="fa fa-plus"></i>
                </a>
                <img
                  src={ai}
                  alt="Nimble AppGenie - Mobile app development services Germany and Texas"
                />
              </div>
            </a>
          </div>

          <div class="col-md-3">
            <a
              href="/maintainance-and-support"
              style={{ textDecoration: "none" }}
            >
              <div class="service-home-box">
                <h4>
                  Maintenance and <br />
                  Support
                </h4>
                <a href="#!" class="">
                  <i class="fa fa-plus"></i>
                </a>
                <img src={maintain} alt="Top Web Designers in Houston" />
              </div>
            </a>
          </div>

          <div class="col-md-3">
            <a href="/ui-design" style={{ textDecoration: "none" }}>
              <div class="service-home-box">
                <h4>
                  UI/UX
                  <br /> Design
                </h4>
                <a href="#!" class="">
                  <i class="fa fa-plus"></i>
                </a>
                <img
                  src={uiux}
                  alt="Top Creative Agencies in London and Denmark"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurOfferings;
