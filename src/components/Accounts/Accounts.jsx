import React, { useState, useEffect } from 'react';
import './Accounts.css';
import NavBar from '../NavBar/CustomNavbar/CustomNavbar';
import close from '../NavBar/res/cancel.png';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const Accounts = () => {
  const [isSchool, setisSchool] = useState(true);
  const [isVendor, setisVendor] = useState(false);
  const [isInstructor, setisInstructor] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [clientStyle, setclientStyle] = useState(null);
  const [corporateStyle, setcorporateStyle] = useState(null);
  const [businessStyle, setbusinessStyle] = useState(null);
  const [adminStyle, setadminStyle] = useState(null);
  useEffect(() => {
    setclientStyle({
      boxShadow: '0 0 10px 7px rgba(0, 0, 0, 0.03)',
      borderBottomColor: 'green',
      green: 'green',
    });
  }, []);
  const changeclientStyle = () => {
    setclientStyle({
      boxShadow: '0 0 10px 7px rgba(0, 0, 0, 0.03)',
      borderBottomColor: 'green',
      green: 'green',
    });
    setcorporateStyle(null);
    setbusinessStyle(null);
    setadminStyle(null);
  };
  const changecorporatetStyle = () => {
    setcorporateStyle({
      boxShadow: '0 0 10px 7px rgba(0, 0, 0, 0.03)',
      borderBottomColor: 'green',
      green: 'green',
    });
    setclientStyle(null);
    setbusinessStyle(null);
    setadminStyle(null);
  };
  const changebusinessStyle = () => {
    setbusinessStyle({
      boxShadow: '0 0 10px 7px rgba(0, 0, 0, 0.03)',
      borderBottomColor: 'green',
      green: 'green',
    });
    setclientStyle(null);
    setcorporateStyle(null);
    setadminStyle(null);
  };
  const changeadminStyle = () => {
    setadminStyle({
      boxShadow: '0 0 10px 7px rgba(0, 0, 0, 0.03)',
      borderBottomColor: 'green',
      green: 'green',
    });
    setclientStyle(null);
    setcorporateStyle(null);
    setbusinessStyle(null);
  };
  const schoolClick = () => {
    setisSchool(true);
    setisVendor(false);
    setisInstructor(false);
    setisAdmin(false);
  };
  const vendorClick = () => {
    setisVendor(true);
    setisSchool(false);
    setisInstructor(false);
    setisAdmin(false);
  };
  const instructorClick = () => {
    setisInstructor(true);
    setisVendor(false);
    setisSchool(false);
    setisAdmin(false);
  };
  const adminClick = () => {
    setisAdmin(true);
    setisInstructor(false);
    setisVendor(false);
    setisSchool(false);
  };
  return (
    <>
      {/* <NavBar /> */}
      <section className="acc">
        <div className="row">
          <div className="col-md-4">
            <div className="loginSection">
              <div className="logow"></div>
              <div className="wrapperReg">
                <div onClick={schoolClick}>
                  <div
                    className="login"
                    onClick={changeclientStyle}
                    style={clientStyle}
                  >
                    <i
                      style={{
                        color: clientStyle ? clientStyle['green'] : '',
                      }}
                      className="fa fa-user fa-2x"
                    ></i>
                    <h3>Client Registration</h3>
                  </div>
                </div>
                <div onClick={vendorClick}>
                  <div
                    className="login"
                    onClick={changecorporatetStyle}
                    style={corporateStyle}
                  >
                    <i
                      style={{
                        color: corporateStyle ? corporateStyle['green'] : '',
                      }}
                      className="fa fa-user fa-2x"
                    ></i>
                    <h3>Corporate Registration</h3>
                  </div>
                </div>

                <div onClick={instructorClick}>
                  <div
                    className="login"
                    onClick={changebusinessStyle}
                    style={businessStyle}
                  >
                    <i
                      style={{
                        color: businessStyle ? businessStyle['green'] : '',
                      }}
                      className="fa fa-user fa-2x"
                    ></i>
                    <h3>Business Partner Registration</h3>
                  </div>
                </div>
                <div onClick={adminClick}>
                  <div
                    className="login"
                    onClick={changeadminStyle}
                    style={adminStyle}
                  >
                    <i
                      style={{ color: adminStyle ? adminStyle['green'] : '' }}
                      className="fa fa-user fa-2x"
                    ></i>
                    <h3>Admin Registration</h3>
                  </div>
                </div>
              </div>

              <div class="icon-handles">
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
            <div className="col-md-8 formContainer1">
              <div className="close">
                <Link to="/">
                  <img src={close} alt="close" />
                </Link>
              </div>
              <div className="accounts-content" style={{ marginTop: '16px' }}>
                <div className="heading">
                  <h2 style={{ textAlign: 'center' }}>
                    Client <span className="ship">Registration</span>
                  </h2>
                </div>

                <div className="register-form-div" align="center">
                  <div className="row">
                    <div className="col-md-12">
                      <div class="mb-3">
                        <i class="fa fa-user"></i>

                        <input
                          type="text"
                          class="form-control accounts-register-form"
                          placeholder="Full Name"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="mb-3">
                        <i class="fa fa-envelope"></i>

                        <input
                          type="email"
                          class="form-control accounts-register-form"
                          placeholder="Email"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="mb-3">
                        <i class="fa fa-phone"></i>

                        <input
                          type="text"
                          class="form-control accounts-register-form"
                          placeholder="Mobile Number"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-lock"></i>

                          <input
                            type="password"
                            class="form-control accounts-register-form"
                            placeholder="Password"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <div class="mb-3">
                        <i class="fa fa-lock"></i>

                        <input
                          type="password"
                          class="form-control accounts-register-form"
                          placeholder="Re-type Password"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary accounts-btn"
                    >
                      Register
                    </button>
                  </div>
                  <div className="login-link mt-3">
                    Already have an account?{' '}
                    <a href="/logins">
                      <span>Click here to login</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isVendor && (
            <div className="col-md-8 formContainer2">
              <div className="close">
                <Link to="/">
                  <img src={close} alt="close" />
                </Link>
              </div>
              <div className="accounts-content" style={{ marginTop: '16px' }}>
                <div className="heading">
                  <h2 style={{ textAlign: 'center' }}>
                    Corporate <span className="ship">Registration</span>
                  </h2>
                </div>

                <div className="register-form-div" align="center">
                  <div className="row">
                    <div className="col-md-12">
                      <div class="mb-3">
                        <i class="fa fa-user"></i>

                        <input
                          type="text"
                          class="form-control accounts-register-form"
                          placeholder="Full Name"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div class="mb-3">
                        <i class="fa fa-envelope"></i>

                        <input
                          type="email"
                          class="form-control accounts-register-form"
                          placeholder="Email"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-phone"></i>

                          <input
                            type="text"
                            class="form-control accounts-register-form"
                            placeholder="Mobile Number"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-lock"></i>

                          <input
                            type="password"
                            class="form-control accounts-register-form"
                            placeholder="Password"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-lock"></i>

                          <input
                            type="password"
                            class="form-control accounts-register-form"
                            placeholder="Re-type Password"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary accounts-btn"
                    >
                      Register
                    </button>
                  </div>
                  <div className="login-link mt-3">
                    Already have an account?{' '}
                    <a href="/logins">
                      <span>Click here to login</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isInstructor && (
            <div className="col-md-8 formContainer3">
              <div className="close">
                <Link to="/">
                  <img src={close} alt="close" />
                </Link>
              </div>
              <div className="accounts-content" style={{ marginTop: '14px' }}>
                <div className="heading">
                  <h2 style={{ textAlign: 'center' }}>
                    Business Partner <span className="ship">Registration</span>
                  </h2>
                </div>

                <div className="register-form-div" align="center">
                  <div className="row">
                    <div className="col-md-12">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-user"></i>

                          <input
                            type="text"
                            class="form-control accounts-register-form"
                            placeholder="Full Name"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-envelope"></i>

                          <input
                            type="email"
                            class="form-control accounts-register-form"
                            placeholder="Email"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-phone"></i>

                          <input
                            type="text"
                            class="form-control accounts-register-form"
                            placeholder="Mobile Number"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-lock"></i>

                          <input
                            type="password"
                            class="form-control accounts-register-form"
                            placeholder="Password"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-lock"></i>

                          <input
                            type="password"
                            class="form-control accounts-register-form"
                            placeholder="Re-type Password"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary accounts-btn"
                    >
                      Register
                    </button>
                  </div>
                  <div className="login-link mt-3">
                    Already have an account?{' '}
                    <a href="/logins">
                      <span>Click here to login</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isAdmin && (
            <div className="col-md-8 formContainer4">
              <div className="close">
                <Link to="/">
                  <img src={close} alt="close" />
                </Link>
              </div>
              <div className="accounts-content" style={{ marginTop: '16px' }}>
                <div className="heading">
                  <h2 style={{ textAlign: 'center' }}>
                    Admin <span className="ship">Registration</span>
                  </h2>
                </div>

                <div className="register-form-div" align="center">
                  <div className="row">
                    <div className="col-md-12">
                      <div class="mb-3">
                        <i class="fa fa-user"></i>

                        <input
                          type="text"
                          class="form-control accounts-register-form"
                          placeholder="Full Name"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-envelope"></i>

                          <input
                            type="email"
                            class="form-control accounts-register-form"
                            placeholder="Email"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <div class="mb-3">
                        <i class="fa fa-phone"></i>

                        <input
                          type="text"
                          class="form-control accounts-register-form"
                          placeholder="Mobile Number"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="mb-3">
                        <i class="fa fa-lock"></i>

                        <input
                          type="password"
                          class="form-control accounts-register-form"
                          placeholder="Password"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <div class="mb-3">
                          <i class="fa fa-lock"></i>

                          <input
                            type="password"
                            class="form-control accounts-register-form"
                            placeholder="Re-type Password"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary accounts-btn"
                    >
                      Register
                    </button>
                  </div>
                  <div className="login-link mt-3">
                    Already have an account?{' '}
                    <a href="/logins">
                      <span>Click here to login</span>
                    </a>
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
export default Accounts;
