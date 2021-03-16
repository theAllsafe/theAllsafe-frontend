import React from "react";
import "./corporate.css";
import SafetyBanner from "../SafetyBanner/SafetyBanner";
import Footer from "../Footer/Footer";
import banner from "./res/1.png";
import Fade from "react-reveal/Fade";
import FullScreenSlider from "../FullScreenSliderx3/FullScreenSlider";
import NavBar from "../NavBar/NavBar";

function corporateOutsourcing() {
  return (
    <>
      <NavBar />
      <section className="business">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h1 className="business-header">
              Quality Software can make <br />{" "}
              <span className="bold-text">
                <b>your business</b>
              </span>{" "}
              easy to manage
              <br /> and{" "}
              <span className="bold-text">
                <b>maximize your profit.</b>
              </span>
            </h1>
            <br />
            <p className="business-para">
              Solve your puzzle with unique ideas in business automation.
              <br /> Use theAllSafe's top-rated software to make money your
              <br />
              business sustainable and more profitable.
              <br />
              Let's us help you to touch your dream.
            </p>
            <a href="#!" className="business-button mb-3">
              Become a partner &nbsp;&nbsp;&nbsp;
              <i className="fa fa-home"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#!" className="business-button mb-3">
              Be Customer &nbsp;&nbsp;&nbsp;
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-md-6">
            <img
              src={banner}
              alt=""
              className="img-fluid"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </section>
      <FullScreenSlider />
      <section className="business-choose">
        <div className="row">
          <div className="col-md-12" align="center">
            <Fade top>
              <h2>
                <span>WHY CHO</span>
                <span className="ship">OSE US?</span>
              </h2>
            </Fade>
          </div>

          <div className="col-md-12" align="center">
            <h4>
              We are Committed to our customers giving 100% satisfied service
              and our main goal is to help customer.
            </h4>
          </div>
        </div>
        <div className="chooseUs">
          <div className="row mt-2">
            <div className="col-md-4 choose1">
              <i className="fa fa-mobile fa-3x"></i>
              <h3>
                Mobile App <br />
                Development
              </h3>
              <p>
                We have developed hundreds of amazingly productive apps for
                smartphones since 2005.
              </p>
            </div>

            <div className="col-md-4 choose1">
              <i className="fa fa-mobile fa-3x"></i>
              <h3>
                Mobile App <br />
                Development
              </h3>
              <p>
                We have developed hundreds of amazingly productive apps for
                smartphones since 2005.
              </p>
            </div>

            <div className="col-md-4 choose1">
              <i className="fa fa-desktop fa-3x"></i>
              <h3>
                Software
                <br />
                Testing and QA
              </h3>
              <p>
                All of our applications are thoroughly tested using QA
                technologies.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 choose1">
              <i className="fa fa-code fa-3x"></i>
              <h3>
                Open Source <br />
                Development
              </h3>
              <p>
                MOst software solution we develop are open source for better
                customizability.
              </p>
            </div>
            <div className="col-md-4 choose1">
              <i className="fa fa-share-alt fa-3x"></i>
              <h3>
                SharePoint
                <br />
                Development
              </h3>
              <p>
                Share Point is perfect platform for business software
                development and support.
              </p>
            </div>
            <div className="col-md-4 choose1">
              <i className="fa fa-cog fa-3x"></i>
              <h3>
                QA Automation <br />
                Services
              </h3>
              <p>
                These services optimise and simplify testing with a minimum sets
                of scripts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="partnership">
        <div className="row">
          <div className="col-md-12" align="center">
            <Fade top>
              <h2>
                <span>PARTNER</span>
                <span className="ship">SHIP</span>
              </h2>
            </Fade>
          </div>
          <div className="col-md-12" align="center">
            <h1>Being a partner you can grow your own business</h1>
            <p>
              theAllSafe offers to resell the best quality digital products with
              lifetime earning opportunities for its partners.
            </p>
            {/* <ul>
              <li>
                Start business with zero Programming knowledge
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-check"></i>
              </li>
              <li>
                Earn money being a partner with theAllSafe
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-check"></i>
              </li>
              <li>
                Establish your own brand with experts
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-check"></i>
              </li>
            </ul> */}
          </div>

          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-md-4 partnership1">
                <div className="first-partnership">
                  <div className="partnership-content">
                    <i className="fa fa-home fa-5x"></i>
                    <h4>Research</h4>
                    <p>Start business with zero Programming knowledge</p>
                  </div>
                  <a href="#!" className="step-btn">
                    Step1
                  </a>
                </div>
              </div>
              <div className="col-md-4 partnership1">
                <div className="first-partnership">
                  <div className="partnership-content">
                    <i className="fa fa-money fa-5x"></i>
                    <h4>Research</h4>
                    <p>Earn money being a partner with theAllSafe</p>
                  </div>
                  <a href="#!" className="step-btn">
                    Step1
                  </a>
                </div>
              </div>
              <div className="col-md-4 partnership1">
                <div className="first-partnership">
                  <div className="partnership-content">
                    <i className="fa fa-home fa-5x"></i>
                    <h4>Research</h4>
                    <p>Establish your own brand with experts</p>
                  </div>
                  <a href="#!" className="step-btn">
                    Step1
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-4 mt-3">
            <img src={banner3} alt="" className="img-fluid" />
          </div> */}
          <div className="col-md-12 mt-5" align="center">
            <a href="#!" className="partnership-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default corporateOutsourcing;
