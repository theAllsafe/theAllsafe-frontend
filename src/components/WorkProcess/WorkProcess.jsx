import React from "react";
import planning from "./res/planning.png";
import development from "./res/d&d.png";
import deploy from "./res/deploy.png";
import testing from "./res/testing.png";
import support from "./res/support.png";
import "./WorkProcess.css";
import Fade from "react-reveal/Fade";
function WorkProcess() {
  return (
    <>
      <div className="offerings">
        <hr style={{ marginTop: "-3rem", marginBottom: "3rem" }} />
        <div class="heading">
          <Fade top>
            <h2>
              WORK <span className="ship">PROCESS</span>
            </h2>
          </Fade>
        </div>
        <div class="work-process">
          <div class="container">
            <div class="row">
              <div className="process-inner">
                <div className="work-pro-content">
                  <Fade left>
                    <h4 className="work-heading">Planning</h4>
                    <p className="paragraph">
                      Before beginning the development process, we plan the
                      whole development strategy and each development stage that
                      will be involved in the project. These precautions allow
                      us to deliver first-class solutions that are bespoke to
                      each of our clients.
                    </p>
                  </Fade>
                </div>

                <div className="pro-number">
                  <div className="num-circle rotate">
                    <h4>01</h4>
                  </div>
                </div>

                <div className="pro-imgbox">
                  <Fade right>
                    <img
                      src={planning}
                      alt="react native app development company London and Saudi Arabia"
                    />
                  </Fade>
                </div>
              </div>

              <div class="process-inner">
                <div class="work-pro-content">
                  <Fade right>
                    <h4 className="work-heading">Design &amp; Development</h4>
                    <p className="paragraph">
                      The design first consists of creating a digital prototype
                      (wireframe) to help you visually understand the web or
                      mobile application flow. The creative UI/UX designs are
                      then completed, which is then followed by the software
                      development.
                    </p>
                  </Fade>
                </div>

                <div class="pro-number">
                  <div class="num-circle blue">
                    <h4>02</h4>
                  </div>
                </div>

                <div class="pro-imgbox">
                  <Fade left>
                    <img
                      src={development}
                      alt="Top App Developers in London and Switzerland"
                    />
                  </Fade>
                </div>
              </div>
              <div class="process-inner">
                <div class="work-pro-content">
                  <Fade left>
                    <h4 className="work-heading">Testing</h4>
                    <p className="paragraph">
                      All software we create are vigorously tested by our
                      detailed Quality Analysts. We use both Manual and
                      Automated testing methods to guarantee our software is
                      performing to a high standard.{" "}
                    </p>
                  </Fade>
                </div>

                <div class="pro-number">
                  <div class="num-circle ">
                    <h4>03</h4>
                  </div>
                </div>
                <div class="pro-imgbox">
                  <Fade right>
                    <img
                      src={testing}
                      alt="Top Software Developers in London and Bulgaria"
                    />
                  </Fade>
                </div>
              </div>
              <div class="process-inner">
                <div class="work-pro-content">
                  <Fade right>
                    <h4 className="work-heading">Deploy</h4>
                    <p className="paragraph">
                      Our experienced project managers and business analysts
                      plan and manage every stage of the project, to ensure the
                      agreed project scope, as well as the goals, mission, and
                      vision of the client, is adhered to throughout the process
                      of completing the project.
                    </p>
                  </Fade>
                </div>
                <div class="pro-number">
                  <div class="num-circle blue">
                    <h4>04</h4>
                  </div>
                </div>
                <div class="pro-imgbox">
                  <Fade left>
                    <img
                      src={deploy}
                      alt="Top UX Designers in London and Norway"
                    />
                  </Fade>
                </div>
              </div>
              <div class="process-inner">
                <div class="work-pro-content">
                  <Fade left>
                    <h4 className="work-heading">Maintenance &amp; Support</h4>
                    <p className="paragraph">
                      Getting bespoke software development created by Nimble
                      AppGenie is only the start of your relationship with us.
                      We offer ongoing maintenance and technical/business
                      support to help your business maintain stability and plan
                      for continued growth!{" "}
                    </p>
                  </Fade>
                </div>
                <div class="pro-number">
                  <div class="num-circle ">
                    <h4>05</h4>
                  </div>
                </div>
                <div class="pro-imgbox">
                  <Fade right>
                    <img
                      src={support}
                      alt="custom web application development Bosnia and Nigeria"
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "3rem", marginBottom: "-3rem" }} />
      </div>
    </>
  );
}

export default WorkProcess;
