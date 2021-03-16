import React from "react";
import "./HotDeals.css";

import Footer from "../Footer/Footer";
import banner from "./res/banner.jpg";
import SafetyBanner from "../SafetyBanner/SafetyBanner";
import NavBar from "../NavBar/NavBar";

function HotDeals() {
  return (
    <>
      <NavBar />

      <section className="hot-deals">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 heading">
              <h2>
                HOT <span className="ship">DEALS</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div class="card">
                <img class="card-img-top" src={banner} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="text-secondary card-text">
                    Product Description <br />
                    Want to put your own image in the circle?
                  </p>
                  <a href="#!" className="mybtn basic">
                    BASIC
                  </a>{" "}
                  <a href="#!" className="mybtn">
                    VALUE
                  </a>{" "}
                  <a href="#!" className="mybtn">
                    PRIME
                  </a>
                </div>
                <div class="card-footer">
                  <div className="row">
                    <div className="col-md-6" align="right">
                      <p>
                        <span>
                          <strong>
                            <del class="text-secondary">₹1499/month</del>
                          </strong>
                        </span>
                      </p>
                    </div>
                    <div className="col-md-6 sidebtn" align="right">
                      <span style={{ color: "#72A761" }}>-34%</span>{" "}
                      <a href="#!" className="btn btn-exp mybutton">
                        <i className="fa fa-rupee"></i> 999/month
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <img class="card-img-top" src={banner} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="text-secondary card-text">
                    Product Description <br />
                    Want to put your own image in the circle?
                  </p>
                  <a href="#!" className="mybtn basic">
                    BASIC
                  </a>{" "}
                  <a href="#!" className="mybtn">
                    VALUE
                  </a>{" "}
                  <a href="#!" className="mybtn">
                    PRIME
                  </a>
                </div>
                <div class="card-footer">
                  <div className="row">
                    <div className="col-md-6" align="right">
                      <p>
                        <span>
                          <strong>
                            <del class="text-secondary">₹1499/month</del>
                          </strong>
                        </span>
                      </p>
                    </div>
                    <div className="col-md-6 sidebtn" align="right">
                      <span style={{ color: "#72A761" }}>-34%</span>{" "}
                      <a href="#!" className="btn btn-exp mybutton">
                        <i className="fa fa-rupee"></i> 999/month
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <img class="card-img-top" src={banner} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="text-secondary card-text">
                    Product Description <br />
                    Want to put your own image in the circle?
                  </p>
                  <a href="#!" className="mybtn basic">
                    BASIC
                  </a>{" "}
                  <a href="#!" className="mybtn">
                    VALUE
                  </a>{" "}
                  <a href="#!" className="mybtn">
                    PRIME
                  </a>
                </div>
                <div class="card-footer">
                  <div className="row">
                    <div className="col-md-6" align="right">
                      <p>
                        <span>
                          <strong>
                            <del class="text-secondary">₹1499/month</del>
                          </strong>
                        </span>
                      </p>
                    </div>
                    <div className="col-md-6 sidebtn" align="right">
                      <span style={{ color: "#72A761" }}>-34%</span>{" "}
                      <a href="#!" className="btn btn-exp mybutton">
                        <i className="fa fa-rupee"></i> 999/month
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default HotDeals;
