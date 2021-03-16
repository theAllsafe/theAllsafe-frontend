import React from "react";
import "./Blogs.css";
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
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
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
        <Pulse>
          <div className="row" style={{ marginTop: "3em" }}>
            <div className="col-md-3 healthcare" align={"center"}>
              <div className="industry-home-box">
                <div>
                  <i
                    className="fa fa-heart fa-5x white-i"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>

                <h4 className="blogs-heading">Health Care</h4>
                <div className="color"></div>
              </div>
            </div>
            <div className="col-md-3" align={"center"}>
              <div className="industry-home-box" id="education-box">
                <div>
                  <i
                    className="fa fa-graduation-cap fa-5x white-i"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>

                <h4 className="blogs-heading">Education</h4>
              </div>
            </div>
            <div className="col-md-3" align={"center"}>
              <div className="industry-home-box" id="shopping-box">
                <div>
                  <i
                    className="fa fa-shopping-basket fa-5x white-i"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>

                <h4 className="blogs-heading">Retail</h4>
              </div>
            </div>

            <div className="col-md-3" align={"center"}>
              <div className="industry-home-box" id="logistic-box">
                <div>
                  <i
                    className="fa fa-truck fa-5x white-i"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>

                <h4 className="blogs-heading">Logistics</h4>
              </div>
            </div>

            <div className="col-md-3" align={"center"}>
              <div className="industry-home-box" id="travel-box">
                <div>
                  <i
                    className="fa fa-plane fa-5x white-i"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>

                <h4 className="blogs-heading">Travel</h4>
              </div>
            </div>

            <div className="col-md-3" align={"center"}>
              <div className="industry-home-box" id="media-box">
                <div>
                  <i
                    className="fa fa-film fa-5x white-i"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>

                <h4 className="blogs-heading">Media</h4>
                <div className="onhovdiv"></div>
              </div>
            </div>

            <div className="col-md-3" align={"center"}>
              <div className="industry-home-box" id="estate-box">
                <div>
                  <i
                    className="fa fa-building fa-5x white-i"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>

                <h4 className="blogs-heading">Real State</h4>
              </div>
            </div>

            <div className="col-md-3" align={"center"}>
              <div className="industry-home-box" id="colleges-box">
                <div>
                  <i
                    className="fa fa-university fa-5x white-i"
                    style={{ fontSize: "3em" }}
                  ></i>
                </div>

                <h4 className="blogs-heading">Colleges</h4>
              </div>
            </div>
          </div>
        </Pulse>
        {/*<div class="row">*/}
        {/*  <div class="col-md-12">*/}
        {/*    <h2 class="text-center font-weight-bold blogs-heading">*/}
        {/*      OUR BLOGS*/}
        {/*    </h2>*/}
        {/*  </div>*/}
        {/*  <div class="col-md-4">*/}
        {/*    <div class="card">*/}
        {/*      <img alt="" class="card-img-top" src={b1} />*/}
        {/*      <div class="card-body">*/}
        {/*        <h5 class="card-title">*/}
        {/*          <strong>Front to Back</strong>*/}
        {/*        </h5>*/}
        {/*        <p class="card-text">*/}
        {/*          The term “front-end” refers to the user interface, while*/}
        {/*          “back-end” means the server, application and database that*/}
        {/*          work behind the*/}
        {/*        </p>*/}
        {/*        <a href="#!" class="btn p-0">*/}
        {/*          Read more...*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div class="col-md-4">*/}
        {/*    <div class="card">*/}
        {/*      <img alt="" class="card-img-top" src={b2} />*/}
        {/*      <div class="card-body">*/}
        {/*        <h5 class="card-title">Android Devlopment</h5>*/}
        {/*        <p class="card-text">*/}
        {/*          The term “front-end” refers to the user interface, while*/}
        {/*          “back-end” means the server, application and database that*/}
        {/*          work behind the*/}
        {/*        </p>*/}
        {/*        <a href="#!" class="btn p-0">*/}
        {/*          Read more...*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div class="col-md-4">*/}
        {/*    <div class="card">*/}
        {/*      <img alt="" class="card-img-top" src={b3} />*/}
        {/*      <div class="card-body">*/}
        {/*        <h5 class="card-title">iOS Development</h5>*/}
        {/*        <p class="card-text">*/}
        {/*          The term “front-end” refers to the user interface, while*/}
        {/*          “back-end” means the server, application and database that*/}
        {/*          work behind the*/}
        {/*        </p>*/}
        {/*        <a href="#!" class="btn p-0">*/}
        {/*          Read more...*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}

export default Blogs;
