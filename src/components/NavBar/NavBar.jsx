import React, { useState } from "react";
import "./NavBar.css";
import Logo from "./res/theAllsafe Blue All.png";
function NavBar() {
  const [newclass, setClass] = useState("fa fa-plus");
  const MouseOver = () => {
    setClass("fa fa-chevron-down");
  };
  const MouseOut = () => {
    setClass("fa fa-plus");
  };

  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <div className="col-lg-3 mt-2 mb-2">
            <a href="/" className="navbar-brand">
              <img
                alt="logo"
                src={Logo}
                width="auto"
                style={{ height: "40px" }}
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="col-lg-4 mt-2 mb-2">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a className="nav-a" href="/business">
                    <b style={{ color: "#2463A1" }}>Business</b>{" "}
                  </a>
                </li>

                <li style={{ color: "#FFBC00" }} className="ml-2">
                  {" "}
                  |
                </li>

                <li className="nav-item">
                  <a className="nav-a ml-2 mt-2" href="/applications">
                    <b style={{ color: "#2463A1" }}>Applications</b>
                  </a>
                </li>

                <li style={{ color: "#FFBC00" }} className="ml-2">
                  {" "}
                  |
                </li>

                <li
                  className="nav-item"
                  onMouseOver={MouseOver}
                  onMouseOut={MouseOut}
                >
                  <div class="dropdown-oneview">
                    <button class="dropbtn-oneview nav-a ml-2">
                      <b>Oneview</b> &nbsp;
                      <span>
                        <i
                          class={newclass}
                          style={{
                            fontSize: "0.6rem",
                            position: "fixed",
                            top: "31px",
                          }}
                        ></i>
                      </span>
                    </button>
                    <div class="dropdown-content-oneview">
                      {/* <div class="megamenu-heading">
                        <h4 style={{ textAlign: "center" }}>theAllsafe</h4>
                      </div> */}
                      <div class="row">
                        <div class="column">
                          <h6>Category 1</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                        <div class="column">
                          <h6>Category 2</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                        <div class="column">
                          <h6>Category 3</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                        <div class="column">
                          <h6>Category 3</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                        <div class="column">
                          <h6>Category 3</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                      </div>
                      <div className="row row-2">
                        <div class="column">
                          <h6>Category 3</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                        <div class="column">
                          <h6>Category 3</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                        <div class="column">
                          <h6>Category 3</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                        <div class="column">
                          <h6>Category 3</h6>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                          <a href="#!">lorem ipsum</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="input-group col-md-4 mt-2">
              <input
                type="text"
                placeholder=""
                name="search "
                className="form-control"
              />

              <span className="input-group-append">
                <button
                  className="btn "
                  type="button"
                  style={{ backgroundColor: "#2463A1" }}
                >
                  <i className="fa fa-search clr-white"></i>
                </button>
              </span>
            </div>

            <div className="col-lg-4 mr-5 mt-2 mb-2">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="!#">
                    <i className="fa fa-shopping-cart fa-2x mr-5 mt-2"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/accounts">
                    <i className="fa fa-user-circle-o fa-2x mr-5 mt-2 "></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/contactus" className="nav-a">
                    <p
                      className=""
                      style={{
                        color: "#2463A1",
                        borderBottom: "3px solid #FFBE00",
                      }}
                    >
                      Contact Us
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
