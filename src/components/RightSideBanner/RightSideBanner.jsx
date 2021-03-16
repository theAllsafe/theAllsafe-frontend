import React from "react";
import "./RightSideBanner.css";
import sideimg1 from "./add/1.JPG";
import sideimg2 from "./add/2.JPG";
import sideimg3 from "./add/3.JPG";
function RightSideBanner() {
  return (
    <div class="col-md-2 pro_add">
      <img src={sideimg1} class="img-fluid" />
      <img src={sideimg2} class="img-fluid" />
      <img src={sideimg3} class="img-fluid" />
    </div>
  );
}

export default RightSideBanner;
