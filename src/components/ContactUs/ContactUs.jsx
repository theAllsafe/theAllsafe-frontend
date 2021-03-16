import React from "react";
import "./ContactUs.css";
//import Logo from "./res/theAllsafe White All.png";
import Logo1 from "./res/theAllsafe Blue All.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import svg from "./res/login_close (1).svg";
import axios from "axios";
// import NavBar from "../NavBar/NavBar";
//import Particle from "react-particles-js";
function ContactUs() {
  // const [fullname, setFullname] = useState(null)
  // const [email, setemail] = useState(null);
  // const [phonenumber, setphonenumber] = useState(null);
  // const [textarea, settextarea] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.elements.fullname.value;
    const email = e.target.elements.email.value;
    const phonenumber = e.target.elements.phonenumber.value;
    const textarea = e.target.elements.textarea.value;
    console.log(fullname, email, phonenumber, textarea);
    axios
      .post(
        "https://sheet.best/api/sheets/89643199-b39a-4f9f-bb2a-8b86890e1773",
        {
          fullname: fullname,
          email: email,
          phonenumber: phonenumber,
          textarea: textarea,
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => {
        <h1>{error}</h1>;
      });
  };
  return (
    <>
      <section class="contact-sec">
        {/* <img src={Logo1} alt="" width="300px" className="contact-icon" /> */}
        <div className="row">
          <Fade left>
            <div className="col-md-8 left">
              <div className="contact-icon">
                <Link to="/">
                  <img src={Logo1} alt="" height="43.25" />
                </Link>
              </div>
              <h2 style={{ textAlign: "center" }}>
                <span>CONTACT</span> <span className="ship">US</span>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="fields">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="">
                          FullName
                          <span className="indication">*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="fullname"
                          id=""
                          className="firstfield"
                        />
                      </div>
                      <div className="col-md-12 mt-4">
                        <label htmlFor="">
                          Email
                          <span className="indication">*</span>
                        </label>
                        <br />
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="firstfield"
                        />
                      </div>
                      <div className="col-md-12 mt-4">
                        <label htmlFor="">
                          PhoneNumber
                          <span className="indication">*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="phonenumber"
                          id=""
                          className="firstfield"
                        />
                      </div>
                      <div className="col-md-12 mt-4">
                        <label htmlFor="">
                          Message
                          <span className="indication">*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="textarea"
                          id=""
                          className="firstfield"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    class="btn c_btn_right"
                    style={{ marginTop: "2em" }}
                  >
                    Submit <i className="fa fa-check-circle-o"></i>
                  </button>
                </div>
              </form>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-4 right">
              <div className="contactheading">
                {/* <Link to="/" className="navbar-brand">
                  <img alt="logo" src={Logo} width="300px" />
                </Link> */}
              </div>

              <div className="address1">
                <div className="home-icon" align="right">
                  <a href="/">
                    <img src={svg} alt="" />
                  </a>
                </div>
                <div className="contact-content">
                  <h4>
                    <i className="fa fa-map-marker"></i>{" "}
                    <a href="#!">London Headquarters</a>
                  </h4>
                  <p>Shelton Street 71-75 Covent Garden</p>
                  <p>T. +44 2035751335</p>
                  <p>allsafe@gmail.com</p>
                </div>
              </div>
              <div className="address1">
                <h4>
                  <i className="fa fa-map-marker"></i>{" "}
                  <a href="#!">London Headquarters</a>
                </h4>
                <p>Shelton Street 71-75 Covent Garden</p>
                <p>T. +44 2035751335</p>
                <p>allsafe@gmail.com</p>
              </div>
              <div class="col-md-12 icon-handles" align="center">
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
          </Fade>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
