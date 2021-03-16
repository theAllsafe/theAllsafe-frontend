import React from "react";
import "./SafetyBanner.css";
function SafetyBanner() {
  return (
    <div className="bs-calltoaction bs-calltoaction-primary">
      <div className="row">
        <div className="col-md-6 cta-contents mt-3">
          <h2 className="cta-title">
            <i className="fa fa-check clr-white"></i> Safety Assured
          </h2>
          <h5 className="cta-title">
            <i className="fa fa-check-square-o clr-white"></i> Secured Software,
            Complete Setup Assured
          </h5>
          <div className="cta-desc">
            <p>
              Describe the action here.Describe the action here.Describe the
              action here.
              <br />
              Describe the action here. Describe the action here.Describe the
              action here.
            </p>
          </div>
        </div>

        <div className="col-md-3 cta-button" style={{ marginTop: "2em" }}>
          <h1>
            {" "}
            <i className="fa fa-truck fa-2x clr-white"></i>
          </h1>
        </div>

        <div className="col-md-3 cta-button mt-4">
          <a href="#!" className="btn btn-lg btn-block btn-info">
            <i className="fa fa-clock-o clr-white"></i> Quick Setup / Delivery
          </a>{" "}
          <br />
          <a href="#!" className="btn btn-lg btn-block btn-info">
            <i className="fa fa-handshake-o clr-white"></i> Full Functional
            Handover
          </a>
        </div>
      </div>
    </div>
  );
}

export default SafetyBanner;
