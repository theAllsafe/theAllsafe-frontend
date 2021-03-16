import React from "react";
import l1 from "./res/l1.png";
import "./OurCollab.css";
import Carousel from "react-bootstrap/Carousel";
//import { Carousel } from "react-responsive-carousel";
function OurCollab() {
  return (
    <>
      <section class="logo-sec">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div className="container heading">
                <h2>OUR COLLABORATORS</h2>
              </div>
            </div>
            <Carousel>
              <Carousel.Item>
                <div className="logo-list">
                  <img className="img-fluid" src={l1} alt="" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="logo-list">
                  <img className="img-fluid" src={l1} alt="" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="logo-list">
                  <img className="img-fluid" src={l1} alt="" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="logo-list">
                  <img className="img-fluid" src={l1} alt="" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="logo-list">
                  <img className="img-fluid" src={l1} alt="" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="logo-list">
                  <img className="img-fluid" src={l1} alt="" />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="logo-list">
                  <img className="img-fluid" src={l1} alt="" />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="logo-list">
                  <img className="img-fluid" src={l1} alt="" />
                </div>
              </Carousel.Item>
            </Carousel>

            {/* <div class="col-md-12 mt-3">
            <Carousel id="product-item" className="owl-carousel owl-theme">
              <div id="product-item" showArrows={true}>
                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>

                <div class="item">
                  <div class="logo-list">
                    <img src={l1} class="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </Carousel>
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCollab;
