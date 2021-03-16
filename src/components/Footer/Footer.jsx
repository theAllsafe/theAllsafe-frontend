import React, { useState } from "react";
import "./Footer.css";
import Cards from "./res/cards.PNG";

import icon from "./res/icon.svg";

function Footer() {
  const [newclass, setClass] = useState("fa fa-chevron-right");
  const MouseOver = () => {
    setClass("fa fa-chevron-up");
  };
  const MouseOut = () => {
    setClass("fa fa-chevron-right");
  };
  return (
    <div>
      <footer>
        <div class="footerbg">
          <div class="row">
            <div class="f_box ">
              <h4 className="clr-white">
                <i className="fa fa-money" style={{ color: "#FFBC01" }}></i>{" "}
                Best Selling
              </h4>
              <ul className="clr-white">
                <li className="clr-white">
                  <a href="#!">E-Commerce</a>
                </li>
                <li>
                  <a href="#!">Grocery Store</a>
                </li>

                <li>
                  <a href="#!">Hotel System</a>
                </li>
                <li>
                  <a href="#!">Inventory and POS</a>
                </li>
              </ul>
            </div>

            <div class="f_box">
              <h4>
                <i
                  className="fa fa-user-circle"
                  style={{ color: "#FFBC01" }}
                ></i>{" "}
                theAllSafe
              </h4>
              <ul>
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Payment</a>
                </li>
                <li>
                  <div
                    class="dropdown"
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    <a
                      class=""
                      id=""
                      data-toggle=""
                      aria-expanded="false"
                      href="#!"
                    >
                      Terms & Condition &nbsp;
                      <i
                        class={newclass}
                        style={{ color: "white", fontSize: "0.6rem" }}
                      ></i>
                    </a>

                    <div
                      class="dropdown-menu menu-drop"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        class="dropdown-item"
                        href="#!"
                        style={{ color: "black", fontSize: "15px" }}
                      >
                        Action
                      </a>
                      <a
                        class="dropdown-item"
                        href="#!"
                        style={{ color: "black", fontSize: "15px" }}
                      >
                        Another action
                      </a>
                      <a
                        class="dropdown-item"
                        href="#!"
                        style={{ color: "black", fontSize: "15px" }}
                      >
                        Something else here
                      </a>
                      <a
                        class="dropdown-item"
                        href="#!"
                        style={{ color: "black", fontSize: "15px" }}
                      >
                        Something else here
                      </a>
                    </div>
                  </div>
                  {/* <a href="/privacy-policy">Terms & Condition</a> */}
                </li>
              </ul>
            </div>
            <div class="f_box">
              <h4>
                <i
                  className="fa fa-user-circle"
                  style={{ color: "#FFBC01" }}
                ></i>{" "}
                Support
              </h4>
              <ul>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Help Center</a>
                </li>
                <li>
                  <a href="#!">Emergency Request</a>
                </li>
              </ul>
            </div>
            <div class="f_box">
              <h4>
                <i className="fa fa-globe" style={{ color: "#FFBC01" }}></i>
                Services
              </h4>
              <ul>
                <li>
                  <a href="#!">Web Development</a>
                </li>

                <li>
                  <a href="#!">Mobile Develoment</a>
                </li>
                <li>
                  <a href="/corporate-outsourcing">Corporate Outsourcing</a>
                </li>

                <li>
                  <a href="#!">Graphic Design</a>
                </li>
                <li>
                  <a href="#!">Custom Software Building</a>
                </li>
              </ul>
            </div>

            <div class="f_box">
              <h4>
                <i className="fa fa-compress" style={{ color: "#FFBC01" }}></i>{" "}
                Connect
              </h4>
              <ul>
                <li>
                  <a href="#!">Open Ticket</a>
                </li>

                <li>
                  <a href="#!">My Account</a>
                </li>
                <li>
                  <a href="#!">Client Login Page</a>
                </li>
                <li>
                  <a href="#!">Emergency Request</a>
                </li>

                <li>
                  <a href="#!">Business Partner Login</a>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <section className="visa_card">
            <div className="row mt-2">
              <div className="col-md-5 display-inline">
                <a href="#!" style={{ textDecoration: "none" }}>
                  <img src={icon} style={{ width: "5%" }} alt="" />
                  <label className="clr-white mr-3 ml-2"> E-Commerce</label>
                </a>

                <a href="#!" style={{ textDecoration: "none" }}>
                  <img src={icon} style={{ width: "5%" }} alt="" />
                  <label className="clr-white mr-3 ml-2"> E-Commerce</label>
                </a>

                <a href="#!" style={{ textDecoration: "none" }}>
                  <img src={icon} style={{ width: "5%" }} alt="" />
                  <label className="clr-white mr-3 ml-2"> E-Commerce</label>
                </a>
              </div>

              <div className="col-md-3">
                <p>
                  ©{" "}
                  <b style={{ color: "#FFBC01", letterSpacing: "3px" }}>
                    {" "}
                    theAllsafe
                  </b>
                </p>
              </div>

              <div className="col-md-4">
                <img src={Cards} style={{ width: "70%" }} alt="" />
                {/*<a href="#!" style={{ textDecoration: "none" }}>*/}
                {/*  <img src={f} style={{ width: "15%" }} alt="" />*/}
                {/*</a>*/}
                {/*<a href="#!" style={{ textDecoration: "none" }}>*/}
                {/*  {" "}*/}
                {/*  <img src={e} style={{ width: "15%" }} alt="" />*/}
                {/*</a>*/}
                {/*<a href="#!" style={{ textDecoration: "none" }}>*/}
                {/*  {" "}*/}
                {/*  <img src={i} style={{ width: "15%" }} alt="" />*/}
                {/*</a>*/}
                {/*<a href="#!" style={{ textDecoration: "none" }}>*/}
                {/*  {" "}*/}
                {/*  <img src={t} style={{ width: "15%" }} alt="" />*/}
                {/*</a>*/}
              </div>
            </div>
          </section>
        </div>

        {/*<div className="row">*/}
        {/*  <div className="col-md-12 copyright" align="center">*/}
        {/*    <strong>&copy; theAllsafe.</strong>2020 All right reserved*/}
        {/*  </div>*/}
        {/*</div>*/}
      </footer>
    </div>
  );
}

export default Footer;
