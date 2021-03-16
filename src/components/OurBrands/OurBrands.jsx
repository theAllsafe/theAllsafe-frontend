import React, { useState, useEffect } from "react";
import "./OurBrands.css";
import img1 from "./res/harmankardon-2dcdf806.svg";
import ref from "./res/refrigerator.jpeg";
import hisense from "./res/hisense-211b465d.svg";
import f from "./res/f.PNG";

function OurBrands() {
  // const [img, setimg] = useState(img1);

  // setInterval(() => {
  //   setimg(hisense);
  // }, 5000);
  // setInterval(() => {
  //   setimg(img1);
  // }, 24000);

  return (
    <section className="brands">
      <h3>
        <strong>Our trusted brands</strong>
      </h3>

      <div className="row" style={{ marginTop: "2em" }}>
        <div className="col-md-2 brand-img" align="center">
          <a href="#!">
            <img src={img1} class="top" alt="" width="150px" />
            <img src={hisense} class="top" alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2 mt-3" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2 mt-3" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2 mt-3" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2 mt-3" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2 mt-3" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
        <div className="col-md-2 mt-3" align="center">
          <a href="#!">
            <img src={img1} alt="" width="150px" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurBrands;
