import React, { useState } from "react";
import "./Logins.css";
import NavBar from "../NavBar/NavBar";
import facebook from "./res/facebook.svg";
import googleplus from "./res/google.svg";
import linkedin from "./res/linkedin.svg";

const Logins = () => {
  const [isSchool, setisSchool] = useState(true);
  const [isVendor, setisVendor] = useState(false);
  const [isInstructor, setisInstructor] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [clientStyle, setclientStyle] = useState(null);
  const [corporateStyle, setcorporateStyle] = useState(null);
  const [businessStyle, setbusinessStyle] = useState(null);
  const [adminStyle, setadminStyle] = useState(null);
  const changeclientStyle = () => {
    setclientStyle({ boxShadow: "0 0 30px rgb(36, 99, 161)" });
    setcorporateStyle(null);
    setbusinessStyle(null);
    setadminStyle(null);
  };
  const changecorporatetStyle = () => {
    setcorporateStyle({ boxShadow: "0 0 30px rgb(36, 99, 161)" });
    setclientStyle(null);
    setbusinessStyle(null);
    setadminStyle(null);
  };
  const changebusinessStyle = () => {
    setbusinessStyle({ boxShadow: "0 0 30px rgb(36, 99, 161)" });
    setclientStyle(null);
    setcorporateStyle(null);
    setadminStyle(null);
  };
  const changeadminStyle = () => {
    setadminStyle({ boxShadow: "0 0 30px rgb(36, 99, 161)" });
    setclientStyle(null);
    setcorporateStyle(null);
    setbusinessStyle(null);
  };
  const schoolClick = () => {
    setisSchool(true);
    setisAdmin(false);
    setisVendor(false);
    setisInstructor(false);
  };
  const vendorClick = () => {
    setisVendor(true);
    setisAdmin(false);
    setisSchool(false);
    setisInstructor(false);
  };
  const instructorClick = () => {
    setisInstructor(true);
    setisAdmin(false);
    setisVendor(false);
    setisSchool(false);
  };
  const adminClick = () => {
    setisAdmin(true);
    setisInstructor(false);
    setisVendor(false);
    setisSchool(false);
  };
  return (
    <>
      <NavBar />
      <section className="accounts-section">
        <div className="row">
          <div className="col-md-4">
            <div className="login-section">
              <div className="row">
                <div className="col-md-6" onClick={schoolClick}>
                  <div
                    className="login"
                    onClick={changeclientStyle}
                    style={clientStyle}
                  >
                    <i className="fa fa-user fa-2x"></i>
                    <h3>Client Login</h3>
                  </div>
                </div>
                <div className="col-md-6" onClick={vendorClick}>
                  <div
                    className="login"
                    onClick={changecorporatetStyle}
                    style={corporateStyle}
                  >
                    <i className="fa fa-user fa-2x"></i>
                    <h3>Corporate Login</h3>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6" onClick={instructorClick}>
                  <div
                    className="login"
                    onClick={changebusinessStyle}
                    style={businessStyle}
                  >
                    <i className="fa fa-user fa-2x"></i>
                    <h3>Business Partner Login</h3>
                  </div>
                </div>
                <div className="col-md-6" onClick={adminClick}>
                  <div
                    className="login"
                    onClick={changeadminStyle}
                    style={adminStyle}
                  >
                    <i className="fa fa-user fa-2x"></i>
                    <h3>Admin Login</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-12 icon-handles mt-5" align="center">
                <ul class="social-network social-circle">
                  <li>
                    <a href="#!" class="icoFacebook" title="Facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="icoTwitter" title="Twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="icoLinkedin" title="Linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#!" class="icoRss" title="Instagram">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {isSchool && (
            <div className="col-md-8">
              <div className="accounts-content" style={{ marginTop: "18px" }}>
                <div className="heading">
                  <h2 style={{ textAlign: "center" }}>
                    Client <span className="ship">Login</span>
                  </h2>
                </div>
                <div className="form-div" align="center">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="mb-3">Continue with Mobile</h4>

                      <p style={{ fontWeight: "600" }}>
                        You'll recieve a four-digit code to verify next
                      </p>
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-phone"></i>

                          <input
                            type="text"
                            class="form-control accounts-form"
                            placeholder="Mobile Number"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mt-3">
                          <button
                            type="button"
                            class="btn btn-outline-primary accounts-btn"
                          >
                            Request an OTP
                          </button>
                        </div>
                        <div className="register-link mt-3">
                          New to theAllsafe?{" "}
                          <a href="/accounts">
                            <span>Click here to register</span>
                          </a>
                        </div>
                      </form>
                      <div className="login_form_title mt-4">
                        <div className="login-title">OR</div>
                      </div>
                      <p style={{ fontWeight: "600" }}>
                        Login with Social accounts
                      </p>
                      <div className="contact-icons mt-3 mb-3">
                        <a href="#!" class="" title="Facebook">
                          <img src={facebook} alt="" />
                        </a>
                        <a href="#!" class="" title="Facebook">
                          <img src={googleplus} alt="" />
                        </a>
                        <a href="#!" class="" title="Facebook">
                          <img src={linkedin} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isVendor && (
            <div className="col-md-8">
              <div className="accounts-content" style={{ marginTop: "18px" }}>
                <div className="heading">
                  <h2 style={{ textAlign: "center" }}>
                    Corporate <span className="ship">Login</span>
                  </h2>
                </div>
                <div className="form-div" align="center">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="mb-3">Continue with Mobile</h4>
                      <p style={{ fontWeight: "600" }}>
                        You'll recieve a four-digit code to verify next
                      </p>
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-phone"></i>

                          <input
                            type="text"
                            class="form-control accounts-form"
                            placeholder="Mobile Number"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mt-3">
                          <button
                            type="button"
                            class="btn btn-outline-primary accounts-btn"
                          >
                            Request an OTP
                          </button>
                        </div>
                        <div className="register-link mt-3">
                          New to theAllsafe?{" "}
                          <a href="/accounts">
                            <span>Click here to register</span>
                          </a>
                        </div>

                        <div className="login_form_title mt-4">
                          <div className="login-title">OR</div>
                        </div>
                        <p style={{ fontWeight: "600" }}>
                          Login with Social accounts
                        </p>
                        <div className="contact-icons mt-3">
                          <a href="#!" class="" title="Facebook">
                            <img src={facebook} alt="" />
                          </a>
                          <a href="#!" class="" title="Facebook">
                            <img src={googleplus} alt="" />
                          </a>
                          <a href="#!" class="" title="Facebook">
                            <img src={linkedin} alt="" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isInstructor && (
            <div className="col-md-8">
              <div className="accounts-content" style={{ marginTop: "18px" }}>
                <div className="heading">
                  <h2 style={{ textAlign: "center" }}>
                    Business Partner <span className="ship">Login</span>
                  </h2>
                </div>
                <div className="form-div" align="center">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="mb-3">Continue with Mobile</h4>
                      <p style={{ fontWeight: "600" }}>
                        You'll recieve a four-digit code to verify next
                      </p>
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-phone"></i>

                          <input
                            type="text"
                            class="form-control accounts-form"
                            placeholder="Mobile Number"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mt-3">
                          <button
                            type="button"
                            class="btn btn-outline-primary accounts-btn"
                          >
                            Request an OTP
                          </button>
                        </div>
                        <div className="register-link mt-3">
                          New to theAllsafe?{" "}
                          <a href="/accounts">
                            <span>Click here to register</span>
                          </a>
                        </div>
                        <div className="login_form_title mt-4">
                          <div className="login-title">OR</div>
                        </div>
                        <p style={{ fontWeight: "600" }}>
                          Login with Social accounts
                        </p>
                        <div className="contact-icons mt-3">
                          <a href="#!" class="" title="Facebook">
                            <img src={facebook} alt="" />
                          </a>
                          <a href="#!" class="" title="Facebook">
                            <img src={googleplus} alt="" />
                          </a>
                          <a href="#!" class="" title="Facebook">
                            <img src={linkedin} alt="" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isAdmin && (
            <div className="col-md-8">
              <div className="accounts-content" style={{ marginTop: "18px" }}>
                <div className="heading">
                  <h2 style={{ textAlign: "center" }}>
                    Admin <span className="ship">Login</span>
                  </h2>
                </div>
                <div className="form-div" align="center">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="mb-3">Continue with Mobile</h4>
                      <p style={{ fontWeight: "600" }}>
                        You'll recieve a four-digit code to verify next
                      </p>
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-phone"></i>

                          <input
                            type="text"
                            class="form-control accounts-form"
                            placeholder="Mobile Number"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mt-3">
                          <button
                            type="button"
                            class="btn btn-outline-primary accounts-btn"
                          >
                            Request an OTP
                          </button>
                        </div>
                        <div className="register-link mt-3">
                          New to theAllsafe?{" "}
                          <a href="/accounts">
                            <span>Click here to register</span>
                          </a>
                        </div>
                        <div className="login_form_title mt-4">
                          <div className="login-title">OR</div>
                        </div>
                        <p style={{ fontWeight: "600" }}>
                          Login with Social accounts
                        </p>
                        <div className="contact-icons mt-3">
                          <a href="#!" class="" title="Facebook">
                            <img src={facebook} alt="" />
                          </a>
                          <a href="#!" class="" title="Facebook">
                            <img src={googleplus} alt="" />
                          </a>
                          <a href="#!" class="" title="Facebook">
                            <img src={linkedin} alt="" />
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* <div className="accounts">
        <div className="row">
          <Zoom top>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-2x"></i>
                <h3>School Login</h3>
              </div>
            </div>
          </Zoom>
          <Zoom top>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-2x"></i>
                <h3>User Login</h3>
              </div>
            </div>
          </Zoom>
          <Zoom top>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-2x"></i>

                <h3>Instructor Login</h3>
              </div>
            </div>
          </Zoom>
          <Zoom top>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-2x"></i>
                <h3>Vendor Login</h3>
              </div>
            </div>
          </Zoom>
        </div>
      </div> */}
    </>
  );
};
export default Logins;
