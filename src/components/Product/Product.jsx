import React from "react";
import "./BusinessSolution1.css";
import BlockMenu from "../BlockMenu/BlockMenu";
import p1 from "./res/p1.JPG";
import p2 from "./res/p2.JPG";
import p3 from "./res/p3.JPG";
import p4 from "./res/Business Solution.png";

//import Footer from "../Footer/Footer";
//import FullScreenSlider from "../FullScreenSliderx3/FullScreenSlider";

function Product() {
  return (
    <div className="BusinessSolution1">
      <BlockMenu />
      <div className="container">
        <h1>BUSINESS SOLUTION</h1>
      </div>
      <div className="pp">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav nav-tabs lis" id="myTab" role="tablist">
              <li class="nav-item pp1">
                <a
                  class="nav-link link1 active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <img className="iconpp" src={p4} alt=""></img>
                  Page 1
                </a>
              </li>
              <li class="nav-item pp1">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <img className="iconpp" src={p4} alt=""></img>
                  Page 2
                </a>
              </li>
              <li class="nav-item pp1">
                <a
                  class="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  <img className="iconpp" src={p4} alt=""></img>
                  Page 3
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <section class="p_main_sec">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="card">
                        <span class="pro_sale">sale</span>
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <section class="p_main_sec">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="card">
                        <span class="pro_sale">sale</span>
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <section class="p_main_sec">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="card">
                        <span class="pro_sale">sale</span>
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p1} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            HR Manager - Human Resource Management System
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            HR Manager is Human Resource Management Systmet for
                            your company HR & Management.
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p2} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            ERP Business ERP Solution / Product / Shop / Company
                            Manag
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ent ERP is a Modern and responsive Business
                            management system. It is developed for thinking
                            shop, small & Medium busi
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card">
                        <img class="card-img-top" src={p3} alt="" />
                        <div class="card-body">
                          <h5 class="card-title">
                            Pharmacare - Pharmacy Software
                          </h5>
                          <p>
                            <span>
                              <del class="text-secondary">₹1999</del>{" "}
                              <ins class="text-success">₹1499</ins>
                            </span>
                          </p>
                          <p class="text-secondary card-text">
                            ade Easy Pharmacare is a pharmacy software which is
                            responsive Modern design for any kind of
                            pharmacy.This pharmacy software is actually used for
                            pharmacy data m
                          </p>
                        </div>
                        <div class="card-footer">
                          <a href="#!" class="btn c_btn_left">
                            {" "}
                            Live Demo
                          </a>
                          <a href="#!" class="btn c_btn_right">
                            Buy now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
