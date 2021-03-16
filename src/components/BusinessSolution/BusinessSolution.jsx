import React from "react";
import "./BusinessSolution.css";
//import BlockMenu from "../BlockMenu/BlockMenu";
import banner from "./res/banner.jpg";
import p1 from "./res/p1.JPG";
import p2 from "./res/p2.JPG";
import p3 from "./res/p3.JPG";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function BusinessSolution() {
  return (
    <>
      <NavBar />
      <section className="business-solution">
        <div className="row">
          <div className="col-md-12" align="center">
            <div className="heading">
              <h2>
                Business <span className="ship">Solutions</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <img
              src={banner}
              alt=""
              className="img-fluid"
              style={{ width: "90%", height: "100%" }}
            />
          </div>

          <div className="col-md-4">
            <h2 className="business-heading" style={{ fontFamily: "Roboto" }}>
              Product Name
            </h2>
            <p className="para">
              Product Description
              <br />
              Solve your puzzle with unique ideas in business automation.Use
              theAllSafe's top-rated software to make money your business
              sustainable and more profitable.Let's us help you to touch your
              dream.
            </p>
            <div className="row">
              <div className="col-md-12">
                <ul class="nav nav-tabs neww2" id="myTab" role="tablist">
                  <li class="nav-item mr-1">
                    <a
                      class="business-btn active"
                      id="t1-tab"
                      data-toggle="tab"
                      href="#t1"
                      role="tab"
                      aria-controls="t1"
                      aria-selected="true"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      Basic
                    </a>
                  </li>
                  <li class="nav-item mr-1">
                    <a
                      class="business-btn"
                      id="t2-tab"
                      data-toggle="tab"
                      href="#t2"
                      role="tab"
                      aria-controls="t2"
                      aria-selected="false"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      Value
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="business-btn"
                      id="t3-tab"
                      data-toggle="tab"
                      href="#t3"
                      role="tab"
                      aria-controls="t3"
                      aria-selected="false"
                      style={{ border: "1px solid lightgrey" }}
                    >
                      Prime
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active releasehistory"
                id="t1"
                role="tabpanel"
                aria-labelledby="t1-tab"
              >
                <p className="para2">
                  Basic Description
                  <br />
                  Want to put your own image in the circle ?
                </p>
                <div className="lastdiv">
                  <p className="del">
                    <del>₹1499/month</del>
                  </p>
                  <p className="percentage">-34%</p>
                  <a href="#!" className=" mb-3 bus">
                    ₹ 999/month
                  </a>
                </div>
              </div>
              <div
                class="tab-pane fade releasehistory"
                id="t2"
                role="tabpanel"
                aria-labelledby="t2-tab"
              >
                <p className="para2">
                  Basic Description
                  <br />
                  Want to put your own image in the circle?
                </p>
                <div className="lastdiv">
                  <p className="del">
                    <del>₹1999/month</del>
                  </p>
                  <p className="percentage">-34%</p>
                  <a href="#!" className=" mb-3 bus">
                    ₹ 1499/month
                  </a>
                </div>{" "}
              </div>
              <div
                class="tab-pane fade releasehistory"
                id="t3"
                role="tabpanel"
                aria-labelledby="t3-tab"
              >
                <p className="para2">
                  Basic Description
                  <br />
                  Want to put your own image in the circle ?
                </p>
                <div className="lastdiv">
                  <p className="del">
                    <del>₹2499/month</del>
                  </p>
                  <p className="percentage">-34%</p>
                  <a href="#!" className=" mb-3 bus">
                    ₹ 1999/month
                  </a>
                </div>
              </div>
            </div>
            {/* <a href="#!" className="business-btn mb-3 active">
              Basic
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#!" className="business-btn mb-3 mr-3">
              Value &nbsp;&nbsp;&nbsp;
            </a>
            <a href="#!" className="business-btn mb-3">
              Prime &nbsp;&nbsp;&nbsp;
            </a> 
            <p className="para2">
              Basic Description
              <br />
              Want to put your own image in the circle ?
            </p>
            <div className="lastdiv">
              <p className="del">
                <del>₹1499/month</del>
              </p>
              <p className="percentage">-34%</p>
              <a href="#!" className=" mb-3 bus">
                ₹ 999/month
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <div className="row">
        <div className="col-md-12">
          <ul class="nav nav-tabs neww" id="myTab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="overview-tab"
                data-toggle="tab"
                href="#overview"
                role="tab"
                aria-controls="overview"
                aria-selected="true"
              >
                OVERVIEW
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="features-tab"
                data-toggle="tab"
                href="#features"
                role="tab"
                aria-controls="features"
                aria-selected="false"
              >
                FEATURES
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="releasehistory-tab"
                data-toggle="tab"
                href="#releasehistory"
                role="tab"
                aria-controls="releasehistory"
                aria-selected="false"
              >
                RELEASE HISTORY
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="buylicense-tab"
                data-toggle="tab"
                href="#buylicense"
                role="tab"
                aria-controls="buylicense"
                aria-selected="false"
              >
                BUY LICENSE
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="relateddeals-tab"
                data-toggle="tab"
                href="#relateddeals"
                role="tab"
                aria-controls="relateddeals"
                aria-selected="false"
              >
                RELATED DEALS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active over"
          id="overview"
          role="tabpanel"
          aria-labelledby="overview-tab"
        >
          <div className="Overview">
            <div className="row">
              <div className="col-md-6 overview-content">
                <h2 className="overview-heading ">
                  SAVE TIME. ELIMINATE ERRORS.
                </h2>
                <p>
                  This simple yet effective tool supports over a dozen database
                  platforms and helps automate the following processes:
                </p>
                <ul>
                  <li>Verify successful database migration and replication</li>
                  <li>Explore differences in database schemas</li>
                  <li>Compare two database tables and views</li>
                  <li>
                    Optimize DevOps routine by running all operations in Command
                    Line Interface (CLI)
                  </li>
                  <li>
                    Migrate data between different database environments (for
                    example, from development to production)
                  </li>
                  <li>
                    Simplify schema and data manipulation tasks in both
                    homogeneous and heterogeneous database environments
                  </li>
                  <li>
                    Restore damaged database objects instead of full database
                    restores
                  </li>
                  <li>
                    Migrate databases and applications from on-premises to the
                    cloud
                  </li>
                </ul>
              </div>
              <div className="col-md-6 overview-content">
                <h2 className="overview-heading">BENEFITS</h2>
                <p>
                  DB Best Database Compare Suite has a user-friendly interface
                  and doesn’t require any specific database experience from the
                  users. In addition to that, our tool provides users with the
                  following benefits:
                </p>
                <ul className="benefits">
                  <li>
                    Speed up verification process when moving to production
                    environment
                  </li>
                  <li>Detect database changes and address them right away</li>
                  <li>Upscale your database migration and upgrade projects</li>
                  <li>Simplify operational data management</li>
                  <li>
                    Avoid human factor and possible errors with full automation
                    of operations
                  </li>
                  <li>
                    Perform comparison and synchronization operations with
                    command-line interface
                  </li>
                  <li>Improve your DevOps pipelines, version control, etc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="features"
          role="tabpanel"
          aria-labelledby="features-tab"
        >
          <div className="features">
            <div class="row">
              <p
                style={{
                  color: "black",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  paddingTop: "40px",
                }}
              >
                We at theAllsafe Best understand the importance of data and the
                pain of data loss or corruption. So, we created a tool that you
                can trust when it comes to data operations, such as comparison,
                migration, synchronization, verification, integrity checks, and
                many others.
                <br />
                Database Compare Suite supports the following database
                platforms: Amazon DynamoDB, Amazon Redshift, Apache Cassandra,
                Azure SQL Database, Azure Synapse Analytics, BigQuery,
                Greenplum, IBM DB2 for Linux, Unix and Windows (LUW), Netezza,
                MariaDB, Microsoft Access, Microsoft SQL Server, MySQL, Oracle,
                PostgreSQL, SAP ASE (Sybase ASE), SAP IQ (Sybase IQ), Teradata,
                and Vertica. Find the list of key Database Compare Suite
                features below.
              </p>
            </div>
            <div class="row features-cards">
              <div class="card col-md-4">
                <div class="card-body">
                  <span className="featur">1</span>
                  <h5 class="card-title featur1">
                    Database Schema Comparison Tool
                  </h5>
                  <p class="card-text">
                    Compare database schemas and identify differences in tables,
                    views, triggers, stored procedures, functions, packages,
                    synonyms, rules, etc. The schema comparison operation takes
                    into account specifics of all supported dialects.
                  </p>
                </div>
              </div>
              <div class="card col-md-4">
                <div class="card-body">
                  <span className="featur">2</span>
                  <h5 class="card-title featur1">Data Comparison Tool</h5>
                  <p class="card-text">
                    Compare data in two database tables or views to quickly
                    discover whether they are equal or not. You can run this
                    operation against databases with equal or close-to-equal
                    database schemas regardless of the source and target
                    platforms.
                  </p>
                </div>
              </div>
              <div class="card col-md-4">
                <div class="card-body">
                  <span className="featur">3</span>
                  <h5 class="card-title featur1">Fast Data Comparison Tool</h5>
                  <p class="card-text">
                    For big volumes of data, the fast data comparison operation
                    quickly checks whether the tables are not equal or not. The
                    result is based on the value, returned by the hash function,
                    so, the detailed comparison results are not available.
                  </p>
                </div>
              </div>
            </div>
            <div class="row features-cards">
              <div class="card col-md-4">
                <div class="card-body">
                  <span className="featur">4</span>
                  <h5 class="card-title featur1">Data Migration Tool</h5>
                  <p class="card-text">
                    Migrate data from the source table to the target table
                    regardless of the database platforms. Use caution when
                    migrating data as this operation clears the data in the
                    target table and then uploads the data from the source
                    table.
                  </p>
                </div>
              </div>

              <div class="card col-md-4">
                <div class="card-body">
                  <span className="featur">5</span>
                  <h5 class="card-title featur1">Command-line interface</h5>
                  <p class="card-text">
                    Database Compare Suite includes both GUI and CLI versions.
                    You can utilize a command-line interface to automate the
                    execution of different data management tasks, DevOps
                    operations, and verification of migration or upgrade.
                  </p>
                </div>
              </div>
              <div class="card col-md-4">
                <div class="card-body pt-20 lastcard">
                  <a href="#!">...View entire feature list</a>
                </div>
              </div>
            </div>
            <h3
              style={{
                paddingLeft: "30px",
                fontSize: "20px",
                paddingTop: "20px",
              }}
            >
              <strong>SUPPORTED VERSIONS:</strong>
            </h3>
            <div className="row">
              <div className="col-md-6  overview-content">
                <ul className="ver">
                  <li>Amazon Redshift</li>
                  <li>Apache Cassandra 2.1 or later</li>
                  <li>Azure SQL Database</li>
                  <li>Azure Synapse Analytics</li>
                  <li>BigQuery</li>
                  <li>
                    IBM DB2 for Linux, Unix and Windows (LUW) 9.7 or later
                  </li>
                  <li>MariaDB 5.5 or later</li>
                  <li>
                    Microsoft SQL Server 2000, 2005, 2008, 2012, 2014, 2016,
                    2017, 2019 (all editions)
                  </li>
                  <li>Microsoft Access</li>
                </ul>
              </div>
              <div className="col-md-6 overview-content">
                <ul className="ver">
                  <li>
                    MySQL 5.5.3 or later (Database Compare Suite works with
                    previous versions as well, but some features can be omitted)
                  </li>
                  <li>Oracle 9.2 or later</li>
                  <li>
                    PostgreSQL 9.2 or later (Database Compare Suite works with
                    previous versions as well, but some features can be omitted)
                  </li>
                  <li>Sybase ASE 12.5 or later</li>
                  <li>Sybase IQ 16 or later</li>
                  <li>Teradata 14 or later</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="releasehistory"
          role="tabpanel"
          aria-labelledby="releasehistory-tab"
        >
          <div className="releasehistory">
            <table>
              <tr>
                <th>DATE</th>
                <th className="th2">VERSION</th>
                <th>DESCRIPTION</th>
              </tr>
              <tr className="th3">
                <td className="relhis">July 9, 2020</td>
                <td className="relhis">5.3</td>
                <td>
                  <ul>
                    <li>
                      Support for BigQuery added.Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="relhis">July 9, 2020</td>
                <td className="relhis">5.3</td>
                <td>
                  <ul>
                    <li>
                      Support for BigQuery added.Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="relhis">July 9, 2020</td>
                <td className="relhis">5.3</td>
                <td>
                  <ul>
                    <li>
                      Support for BigQuery added.Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="relhis">July 9, 2020</td>
                <td className="relhis">5.3</td>
                <td>
                  <ul>
                    <li>
                      Support for BigQuery added.Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                    <li>
                      Support for BigQuery added. Database Compare Suite now
                      supports{" "}
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="buylicense"
          role="tabpanel"
          aria-labelledby="buylicense-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="relateddeals"
          role="tabpanel"
          aria-labelledby="relateddeals-tab"
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
                        HR Manager is Human Resource Management Systmet for your
                        company HR & Management.
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
                        ent ERP is a Modern and responsive Business management
                        system. It is developed for thinking shop, small &
                        Medium busi
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
                      <h5 class="card-title">Pharmacare - Pharmacy Software</h5>
                      <p>
                        <span>
                          <del class="text-secondary">₹1999</del>{" "}
                          <ins class="text-success">₹1499</ins>
                        </span>
                      </p>
                      <p class="text-secondary card-text">
                        ade Easy Pharmacare is a pharmacy software which is
                        responsive Modern design for any kind of pharmacy.This
                        pharmacy software is actually used for pharmacy data m
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
      <Footer />
    </>
  );
}
export default BusinessSolution;
