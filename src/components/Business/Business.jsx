import React from 'react';
import './Business.css';
import SafetyBanner from '../SafetyBanner/SafetyBanner';
import Footer from '../Footer/Footer';
import banner from './res/1.png';
// import banner2 from "./res/banner2.png";
//import banner3 from "./res/banner3.png";
import Fade from 'react-reveal/Fade';
import FullScreenSlider from '../FullScreenSliderx3/FullScreenSlider';
import NavBar from '../NavBar/NavBar';

function Business() {
  return (
    <>
      <NavBar />
      <div className="containerX">
        <section className="business">
          <div className="b_top_left">
            <h1 className="business-header">
              Quality Software can make <br />{' '}
              <span className="bold-text">
                <b>your business</b>
              </span>{' '}
              easy to manage
              <br /> and{' '}
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
            <div className="btnContainer">
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
          </div>
          <div className="b_top_right">
            <img src={banner} alt="" />
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

          <div class="rowy justify-content-center">
            <div class="col-md-6 col-lg-4">
              <div class="single-feature-area text-center">
                <div class="feature-icon">
                  <i class="ri-file-code-line"></i>
                </div>

                <div class="feature-content-text">
                  <h4>Web Development</h4>
                  <p>
                    The front end of your website. No coding and no confusing
                    back end options.
                  </p>
                  <a href="#">
                    Read more <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-feature-area text-center">
                <div class="feature-icon">
                  <i class="ri-task-line"></i>
                </div>

                <div class="feature-content-text">
                  <h4>Mobile App Developemnt</h4>
                  <p>
                    We have developed hundreds of amazingly productive apps for
                    smartphones since 2005.
                  </p>
                  <a href="#">
                    Read more <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-feature-area text-center">
                <div class="feature-icon">
                  <i class="ri-user-3-line"></i>
                </div>

                <div class="feature-content-text">
                  <h4>Software Testing and QA</h4>
                  <p>
                    All of our applications are thoroughly tested using QA
                    technologies.
                  </p>
                  <a href="#">
                    Read more <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-feature-area text-center">
                <div class="feature-icon">
                  <i class="ri-compasses-2-line"></i>
                </div>

                <div class="feature-content-text">
                  <h4>Open Source Development</h4>
                  <p>
                    Most software solution we develop are open source for better
                    customizability.
                  </p>
                  <a href="#">
                    Read more <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-feature-area text-center">
                <div class="feature-icon">
                  <i class="ri-service-line"></i>
                </div>

                <div class="feature-content-text">
                  <h4>SharePoint Development</h4>
                  <p>
                    Share Point is perfect platform for business software
                    development and support.
                  </p>
                  <a href="#">
                    Read more <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-feature-area text-center">
                <div class="feature-icon">
                  <i class="ri-code-s-slash-fill"></i>
                </div>

                <div class="feature-content-text">
                  <h4>QA Automation Services</h4>
                  <p>
                    These services optimise and simplify testing with a minimum
                    sets of scripts.
                  </p>
                  <a href="#">
                    Read more <i class="ri-arrow-right-s-line"></i>
                  </a>
                </div>
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
                theAllSafe offers to resell the best quality digital products
                with lifetime earning opportunities for its partners.
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
              <div class="rowy justify-content-center">
                <div class="col-md-6 col-lg-4">
                  <div class="single-feature-area text-center stepCard">
                    <div class="feature-icon">
                      <i class="ri-task-line"></i>
                    </div>

                    <div class="feature-content-text">
                      <h4>Research</h4>
                      <p>Start business with zero Programming knowledge</p>
                      <button className="stepBtn">Step 1</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4">
                  <div class="single-feature-area text-center stepCard">
                    <div class="feature-icon">
                      <i class="ri-task-line"></i>
                    </div>

                    <div class="feature-content-text">
                      <h4>Research</h4>
                      <p>Earn money being a partner with theAllSafe</p>
                      <button className="stepBtn">Step 2</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4">
                  <div class="single-feature-area text-center stepCard">
                    <div class="feature-icon">
                      <i class="ri-task-line"></i>
                    </div>

                    <div class="feature-content-text">
                      <h4>Research</h4>
                      <p>Establish your own brand with experts</p>
                      <button className="stepBtn">Step 3</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-md-4 mt-3">
            <img src={banner3} alt="" className="img-fluid" />
          </div> */}
            <div className="col-md-12 mt-5" align="center">
              <a href="#!" id="learnMore" className="partnership-btn">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default Business;
