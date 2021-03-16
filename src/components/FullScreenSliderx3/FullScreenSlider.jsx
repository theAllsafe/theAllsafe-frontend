import React from "react";
import "./FullScreenSlider.css";
// import Carousel from "react-bootstrap/Carousel";
import slider1 from "./add-slider/1.jpg";
import slider2 from "./add-slider/2.jpg";
import slider3 from "./add-slider/3.JPG";
function FullScreenSlider() {
  return (
    // <section class="add_slider">
    //   <button>&gt;</button>
    //   <div
    //     id="carouselExampleIndicators"
    //     className="carousel slide"
    //     data-ride="carousel"
    //   >
    // <ol className="carousel-indicators">
    //   <li
    //     data-target="#carouselExampleIndicators"
    //     data-slide-to="0"
    //     className="active"
    //   ></li>
    //   <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //   <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    // </ol>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img className="d-block w-100" src={slider1} alt="First slide" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <button style={{ float: "left", marginRight: "0" }}>&gt;</button>
    //         </div>

    //         <div className="carousel-caption d-none d-md-block">
    //           <button
    //             type="submit"
    //             className="btn btn-info"
    //             style={{
    //               marginLeft: "100%",
    //               marginTop: "-5em",
    //               width: "15%",
    //               backgroundColor: "#FFB900",
    //               border: "none",
    //             }}
    //           >
    //             EXPLORE NOW
    //           </button>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img className="d-block w-100" src={slider2} alt="Second slide" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <button
    //             type="submit"
    //             className="btn btn-info"
    //             style={{
    //               marginLeft: "100%",
    //               marginTop: "-5em",
    //               width: "15%",
    //               backgroundColor: "#FFB900",
    //               border: "none",
    //             }}
    //           >
    //             EXPLORE NOW
    //           </button>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img className="d-block w-100" src={slider3} alt="Third slide" />
    //         <div className="carousel-caption d-none d-md-block">
    //           <button
    //             type="submit"
    //             className="btn btn-info"
    //             style={{
    //               marginLeft: "100%",
    //               marginTop: "5-em",
    //               width: "15%",
    //               backgroundColor: "#FFB900",
    //               border: "none",
    //             }}
    //           >
    //             EXPLORE NOW
    //           </button>
    //         </div>
    //       </div>
    //       <a
    //         class="carousel-control-prev"
    //         href="#carouselExampleControls"
    //         role="button"
    //         data-slide="prev"
    //       >
    //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span class="sr-only">Previous</span>
    //       </a>
    //       <a
    //         class="carousel-control-next"
    //         href="#carouselExampleControls"
    //         role="button"
    //         data-slide="next"
    //       >
    //         <span
    //           class="carousel-control-next-icon nxt"
    //           aria-hidden="true"
    //         ></span>
    //         <span class="sr-only">Next</span>
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section class="add_slider">
      <div class="row">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={slider1} className="d-block w-100" alt="" />
              <div className="carousel-caption d-none d-md-block">
                <a href="#!" className="btn btn-exc">
                  EXPLORE NOW
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <img src={slider2} className="d-block w-100" alt="" />
              <div className="carousel-caption d-none d-md-block">
                <a href="submit" className="btn btn-exc">
                  EXPLORE NOW
                </a>
              </div>
            </div>
            <div class="carousel-item">
              <img src={slider3} className="d-block w-100" alt="" />
              <div className="carousel-caption d-none d-md-block">
                <button type="submit" className="btn btn-exc">
                  EXPLORE NOW
                </button>
              </div>
            </div>
          </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <i class="fa fa-angle-left"></i>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <i class="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FullScreenSlider;
