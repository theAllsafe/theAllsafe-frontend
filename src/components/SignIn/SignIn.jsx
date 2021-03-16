import React from "react";
import "./SignIn.css";
import Logo from "./res/theAllsafe Blue All.png";
import { Link } from "react-router-dom";
import facebook from "./res/facebook.svg";
import googleplus from "./res/google.svg";
import linkedin from "./res/linkedin.svg";
import svg from "./res/login_close (1).svg";
function SignIn() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="logo">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="" height="43.25" />
            </Link>
          </div>
          <div className="col-md-12" align="center">
            <div className="login-form">
              <h1>Login to Your Account</h1>
              <p>Login using social networks</p>
              <div className="contact-icons">
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
              <form className="login_form">
                <div className="login_form_title">
                  <div className="login-title">OR</div>
                </div>
                <fieldset className="auth-form-fieldset">
                  <div className="email-field">
                    <fieldset className="email">
                      <input type="email" placeholder="Email" />
                    </fieldset>
                  </div>
                  <div className="password-field">
                    <fieldset className="password">
                      <input type="password" placeholder="Password" />
                    </fieldset>
                    <div className="password-eye"></div>
                  </div>
                </fieldset>
                <button className="login-form-btn">Sign in</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <section className="login-background">
            <div className="cross-icon">
              <a href="/">
                <img src={svg} alt="" />
              </a>
            </div>
            <div className="col-md-12" align="center">
              <div className="login-content">
                <h1>New Here?</h1>
                <p>
                  Sign up and discover a <br />
                  great amount of new <br />
                  opportunities!
                </p>
                <div className="signup-link">
                  <a href="/signup" className="signup-form-btn">
                    Sign up
                  </a>
                </div>
              </div>
            </div>

            {/* <Particles params={particlesOptions} className="particles" /> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
