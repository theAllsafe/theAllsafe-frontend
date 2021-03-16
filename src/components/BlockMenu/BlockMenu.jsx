import React from "react";
import "./BlockMenu.css";
// import Logo from "./icon/theAllsafe Blue All(1).png";
//import icon from "./icon/Free Setup Dilevery Sale Me Lo Khush Raho.png";
import Business from "./icon/Business Solution.png";
// import oneview from "./icon/One View.png";
// import ssl from "./icon/SSL Secured.png";
// import cart from "./icon/Cart.png";
// import myaccount from "./icon/My Account.png";
import icon2 from "./icon/E-Commerce.png";
import icon3 from "./icon/Education.png";
import icon4 from "./icon/Healthcare.png";
import icon5 from "./icon/Human Resource.png";
import icon6 from "./icon/News and Blogs.png";
import icon7 from "./icon/Online Reservation.png";
import icon8 from "./icon/Hotel and Resturant.png";
import icon9 from "./icon/OTT Platform.png";
import icon10 from "./icon/Others.png";
// import { Link } from "react-router-dom";
// import contact from "./icon/Contact Us.png";
//import TopHeader from "../TopHeader/TopHeader";
const BlockMenu = () => {
  return (
    <div>
      <header>
        {/* <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <div className="col-lg-3 mt-2 mb-2">
            <Link to="/" className="navbar-brand">
              <img alt="logo" src={Logo} width="180px" />
            </Link>
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
                  <Link className="nav-link" to="/business">
                    <b style={{ color: "#2463A1" }}>Business</b>{" "}
                  </Link>
                </li>

                <li style={{ color: "#FFBC00" }} className="mt-2 ml-2">
                  {" "}
                  |
                </li>

                <li className="nav-item">
                  <Link className="nav-link ml-2" to="/applications">
                    <b style={{ color: "#2463A1" }}>Applications</b>
                  </Link>
                </li>

                <li style={{ color: "#FFBC00" }} className="mt-2">
                  {" "}
                  |
                </li>

                <li className="nav-item">
                  <a className="nav-link ml-2" href="#!">
                    <b style={{ color: "#2463A1" }}>Oneview</b>
                  </a>
                </li>
              </ul>
            </div>

            <div className="input-group col-md-4">
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
                  <a href="#!">
                    <i className="fa fa-shopping-cart fa-2x mr-5 mt-2"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#!">
                    <i className="fa fa-user-circle-o fa-2x mr-5 mt-2 "></i>
                  </a>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">
                    <p
                      className=""
                      style={{
                        color: "#2463A1",
                        borderBottom: "3px solid #FFBE00",
                      }}
                    >
                      Contact Us
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/*<nav className="navbar-expand-md fixed-top" style={{backgroundColor: "#FBFBFB",borderBottom: "0.5px solid lightgrey",}} >*/}
        {/*  <div className="navbar-toggler-right">*/}
        {/*    <button*/}
        {/*        className="navbar-toggler"*/}
        {/*        type="button"*/}
        {/*        data-toggle="collapse"*/}
        {/*        data-target="#navbar"*/}
        {/*        aria-controls="navbarTogglerDemo02"*/}
        {/*        aria-expanded="false"*/}
        {/*        aria-label="Toggle navigation"*/}
        {/*    >*/}
        {/*      <span className="navbar-toggler-icon"></span>*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*  <div className="">*/}
        {/*    <div className="row" style={{marginTop: 10}}>*/}

        {/*      <div className="col-lg-3">*/}
        {/*        <a href="#!">*/}
        {/*          <img alt="logo" src={Logo} width="250"/>*/}
        {/*        </a>*/}
        {/*      </div>*/}

        {/*      <div className="col-lg-3">*/}
        {/*        <div style={{marginTop: "1em"}}>*/}
        {/*          <a href="#!"><label style={{marginRight: "2.5em"}}>Business</label></a>*/}
        {/*          <a href="#!"><label style={{marginRight: "2.5em"}}>Applications</label></a>*/}
        {/*          <a href="#!"><label>Oneview</label></a>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*<div className="col-lg-3">*/}
        {/*  <div*/}
        {/*      className="form-group has-search"*/}
        {/*      style={{marginTop: "0.5em"}}*/}
        {/*  >*/}
        {/*    <span className="fa fa-search form-control-feedback"></span>*/}
        {/*    <input*/}
        {/*        type="text"*/}
        {/*        className="form-control"*/}
        {/*        placeholder=" "*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*  <div className="col-lg-3" >*/}
        {/*    <div className="logo_menu" style={{marginTop: "0.25em"}}>*/}
        {/*      <ul style={{float:'right'}}>*/}
        {/*        <li>*/}
        {/*          <a href="#!">*/}
        {/*            <img alt="cart" src={cart}/>*/}
        {/*          </a>*/}
        {/*        </li>*/}

        {/*        <li>*/}
        {/*          <a href="#!">*/}
        {/*            <img alt="account" src={myaccount}/>*/}
        {/*          </a>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <a href="#!">*/}
        {/*            Contact Us*/}
        {/*          </a>*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*</div>*/}
        {/*  </div>*/}
        {/*</nav>*/}

        {/* <section class="head-2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4 ">
                <a href="#!">
                  <img alt="" src={Logo} width="200" />
                </a>
              </div>

              <div class="col-md-3">
                <div class="form-group has-search">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div class="col-md-5">
                <div class="logo_menu">
                  <ul>
                    <li>
                      <a href="#!">
                        <img alt="" src={oneview} />
                        Oneview
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img
                          alt=""
                          src={ssl}
                          style={{
                            width: "80px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img alt="" src={cart} />
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <img alt="" src={myaccount} />
                        My Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <nav
          class="navbar navbar-expand-md navbar-dark"
          style={{ marginTop: "5em" }}
        >
          <div className="container-fluid blocks">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent main_nav"
            >
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <span class="new-info ">₹999/mo onwards</span>
                  <a
                    className="nav-link dropdown-toggle"
                    href="/businessSolution"
                    id="navbarDropdown2"
                  >
                    <img alt="" src={Business} class="img-fluid" />
                    Business <br />
                    Solution
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Inventory Management
                    </a>

                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      POS System
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                  >
                    <img alt="" src={icon2} class="img-fluid" />
                    E-Commerce
                  </a>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Single Vendor
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Multi Vendor
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Grocery Store - Single Vendor
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Grocery Store - Multi Vendor
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Flower and Gifts
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon3} class="img-fluid" />
                    Education
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      School Management System
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Library Management System
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Learning Management System
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      E-Class Sharing Portal
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <span class="new-info">Up to 30% off</span>
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon4} class="img-fluid" />
                    Healthcare
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Hospital Management System
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Pharma
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      POS Chemist
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon5} class="img-fluid" />
                    Human <br />
                    Resource
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Job Portal
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      HR Management System
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon6} class="img-fluid" />
                    News & Blogs
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      News Portal
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Blog Portal
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Sarkari Job Portal
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon7} class="img-fluid" />
                    Online <br />
                    Reservation
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Cab Booking
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Bus Booking
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon8} class="img-fluid" />
                    Hotel & <br />
                    Resturant
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Hotel Booking
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Booking Integration
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon9} class="img-fluid" />
                    OTT Platform
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Multi Video Platform
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      Like TVideo
                    </a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <span class="new-info">New</span>
                  <a
                    class="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdown2"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img alt="" src={icon10} class="img-fluid" />
                    Others
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      page 1
                    </a>
                    <a
                      class="dropdown-item"
                      href="#!"
                      style={{ textAlign: "left" }}
                    >
                      page 1
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>

    // {/* {info && <span class="new-info">{info}</span>}
    // <div className="image">
    //   <img className="icon img-block" src={icon} alt="" />
    // </div>
    // <div className="title dropdown">
    //   <button className="dropdownbtn btn btn-link">
    //     <strong>{title}</strong>
    //   </button>
    //   <div className="dropdown-content">
    //     <a href="#!">Page 1</a>
    //     <a href="#!">Page 2</a>
    //   </div>
    // </div> */}
  );
};

export default BlockMenu;
