import React from 'react';
import './Blogs.css';
// import b1 from "./res/b1.JPG";
// import b2 from "./res/b2.JPG";
// import b3 from "./res/b3.JPG";
// import webdev from "../OurOfferings/res/web-development.png";
// import android from "../OurOfferings/res/android.png";
// import ios from "../OurOfferings/res/ios.png";
// import ai from "../OurOfferings/res/ai-service.png";
// import maintain from "../OurOfferings/res/maintain.png";
// import uiux from "../OurOfferings/res/uiux.png";
// import deploy from "../WorkProcess/res/deploy.png";
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
function Blogs() {
  return (
    <section class="blog_sec">
      <div class="container-fluid">
        <div className="container heading">
          <Fade top>
            <h2>
              INDUS<span className="ship">TRIES</span>
            </h2>
          </Fade>
        </div>
        <div className="industry_icons">
          <div className="item1 item">
            <a href="#">
              <i className="fa fa-heart"></i>
              <h5>Health Care</h5>
            </a>
          </div>
          <div className="item2 item">
            <a href="#">
              <i className="fa fa-graduation-cap"></i>
              <h5>Education</h5>
            </a>
          </div>
          <div className="item3 item">
            <a href="#">
              <i className="fa fa-shopping-basket"></i>
              <h5>Retail</h5>
            </a>
          </div>
          <div className="item4 item">
            <a href="#">
              <i className="fa fa-truck"></i>
              <h5>Logistics</h5>
            </a>
          </div>
          <div className="item5 item">
            <a href="#">
              <i className="fa fa-plane"></i>
              <h5>Travel</h5>
            </a>
          </div>
          <div className="item6 item">
            <a href="#">
              <i className="fa fa-film"></i>
              <h5>Media</h5>
            </a>
          </div>
          <div className="item7 item">
            <a href="#">
              <i className="fa fa-building"></i>
              <h5>Real Estate</h5>
            </a>
          </div>
          <div className="item8 item">
            <a href="#">
              <i className="fa fa-university"></i>
              <h5>Colleges</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
