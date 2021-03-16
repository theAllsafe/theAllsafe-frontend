import React from "react";
import "./SignUp.css";
import Logo from "./res/theAllsafe White All.png";
import { Link } from "react-router-dom";
import facebook from "./res/facebook.svg";
import googleplus from "./res/google.svg";
import linkedin from "./res/linkedin.svg";
import svg from "./res/dark_cross.svg";
function SignUp() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <section className="signUp-background">
            <div className="logo">
              <Link to="/" className="navbar-brand">
                <img alt="logo" src={Logo} height="43.25" />
              </Link>
            </div>
            <div className="col-md-12" align="center">
              <div className="signUp-content">
                <h1>One Of Us?</h1>
                <p>
                  If you already have an
                  <br /> account, just sign in.We've <br />
                  missed you!
                </p>
                <div className="signin-link">
                  <a href="/signin" className="signin-form-btn">
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-8">
          <div className="signUp-cross-icon">
            <a href="/">
              <img src={svg} alt="" />
            </a>
          </div>
          <div className="col-md-12" align="center">
            <div className="signUp-form">
              <h1>Create Free Account</h1>
              <p>Sign up using social networks</p>

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
              <form className="signUp_form">
                <div className="signUp_form_title">
                  <div className="signUp-title">OR</div>
                </div>
                <fieldset className="auth-form-fieldset">
                  <div className="registration-box">
                    <fieldset className="name-fields">
                      <input type="text" placeholder="Name" />
                    </fieldset>
                    {"             "}
                    <fieldset className="surname">
                      <input
                        type="text"
                        placeholder="SurName"
                        className="surname-field"
                      />
                    </fieldset>
                  </div>
                  <div className="registration-box">
                    <fieldset className="name-fields">
                      <input type="email" placeholder="Email" />
                    </fieldset>
                    {"             "}
                    <fieldset className="surname">
                      <input
                        type="password"
                        placeholder="Password"
                        className="surname-field"
                      />
                    </fieldset>
                  </div>
                </fieldset>
                <button className="signUp-form-btn">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
