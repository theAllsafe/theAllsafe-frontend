import React from 'react';
import './Applications.css';
import Footer from '../Footer/Footer';
import phone from './phone.png';
import NavBar from '../NavBar/NavBar';
import appdisplay from './draw.png';
import phone2 from './ba-6.png';
import icecream from './image-13.png';

function Applications() {
  return (
    <div className="application">
      <NavBar />
      {/* <section className="application"> */}
      <div className="top">
        <div className="top_left">
          <h1>Android and ios App Development</h1>
          <p className="top_c">
            Get more users to promote your app with this template
          </p>
          <button className="startBtn">Get Start Now</button>
        </div>
        <div className="top_right">
          <img src={phone} alt="phone image" />
        </div>
      </div>

      <div className="middleSection container">
        <h1>Save your time by using our app</h1>
        <div className="app_icon_container ">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="content">
                <div className="icon icon1">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Manage team in One Place</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="content">
                <div className="icon icon2">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3>All-powerful Features</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="content">
                <div className="icon icon3">
                  <i className="far fa-comment-alt"></i>
                </div>
                <h3>Establish a solid online presence</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="bottomSection container">
        <div className="b_left">
          <h1>Features that give you real feel</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.
          </p>
          <button className="btn btn-primary">View More</button>
        </div>
        <div className="b_right">
          <img src={appdisplay} alt="Phone with app" />
        </div>
      </div>

      <div className="bottomSection container pt-5">
        <div className="b_left1">
          <h1>Apps Features & Support Which Give You More Freedom</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus
            eleifend tortor, vel molestie orci feugiat sit amet. <br />
            We are committed to providing quality IT Services. Vesti at bulum
            nec odio aea the dumm ipsumm ipsum. <br /> Our benefits are endless
            for local IT Companies & Startups. <br />
            We are committed to providing quality IT Services.
          </p>
          <button className="btn btn-primary">View More</button>
        </div>
        <div className="b_right2">
          <img src={phone2} alt="Phone with app" />
        </div>
      </div>

      <div className="footerBanner">
        <div className="container fb_container">
          <div className="fb_left">
            <h1>Download Our App</h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ex aut exercitationem quae possimus magnam.
            </h4>
            <div className="btn_container">
              <button className="store">
                <i className="fab fa-app-store-ios"></i>Appstore
              </button>
              <button className="store">
                <i class="fab fa-google-play"></i>Playstore
              </button>
            </div>
          </div>
          <div className="fb_right">
            <img src={icecream} alt="Phone Image" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Applications;
