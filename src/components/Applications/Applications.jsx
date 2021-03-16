import React from "react";
import "./Applications.css";

import Footer from "../Footer/Footer";
import phone from "./icons/application/cut-top-img.png";
import group from "./icons/Group3644.png";
import group1 from "./icons/Group3680.png";
import group3 from "./icons/Group3681.png";
import NavBar from "../NavBar/NavBar";
function Applications() {
  return (
    <div>
      <NavBar />
      {/* <section className="application"> */}
      <section className="first-section">
        <div className="first-section-content">
          <div className="row">
            <div className="col-md-6">
              <div className="mobile-screen">
                <img src={phone} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h1>LOREM IPSUM</h1>
                <h4>lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna
                  nibh, viverra non, semper suscipit, posuere a, pede.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="platform-main">
        <div className="platform-content">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="platform-data">
                <h1>LOREM IPSUM</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna
                  nibh, viverra non, semper suscipit, posuere a, pede.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="platform-icon-box">
                <div className="icon-box">
                  <i className="fa fa-apple fa-5x"></i>
                  <span>Ios</span>
                </div>
                <div className="icon-box android">
                  <i className="fa fa-android fa-5x"></i>
                  <span>Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slider">
        <div className="slider-con">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="slider-content">
                <h1>LOREM IPSUM</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat
                  mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna
                  nibh, viverra non, semper suscipit, posuere a, pede.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="structure">
        <div className="row">
          <div className="structurebox">
            <span className="big-text">Structure</span>
            <h1>Structure</h1>
            <p style={{ fontWeight: "500" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
            <img src={group} alt="" className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="applications-features">
        <div className="feature-box-left">
          <span>FEATURES</span>
          <img src={group1} alt="" />
        </div>
        <div className="feature-content">
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p style={{ fontWeight: "500" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p style={{ fontWeight: "500" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p style={{ fontWeight: "500" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede..
            </p>
          </div>
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p style={{ fontWeight: "500" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p style={{ fontWeight: "500" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
        </div>
      </section>
      <section className="why-use-main">
        <div className="row">
          <div className="col-md-8">
            <div className="section-why-use">
              <h1>
                <span>CUT</span>
                Why?
              </h1>
              <div className="row">
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p style={{ fontWeight: "400" }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna nibh, viverra non, semper
                      suscipit, posuere a, pede.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p style={{ fontWeight: "400" }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna nibh, viverra non, semper
                      suscipit, posuere a, pede.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p style={{ fontWeight: "400" }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna nibh, viverra non, semper
                      suscipit, posuere a, pede.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p style={{ fontWeight: "400" }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna nibh, viverra non, semper
                      suscipit, posuere a, pede.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p style={{ fontWeight: "400" }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna nibh, viverra non, semper
                      suscipit, posuere a, pede.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p style={{ fontWeight: "400" }}>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna nibh, viverra non, semper
                      suscipit, posuere a, pede.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 layer-screen">
            <img
              src={group3}
              alt=""
              style={{ width: "119%", height: "fit-content" }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Applications;
