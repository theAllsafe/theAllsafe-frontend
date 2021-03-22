import React from 'react';
import banner from './res/banner.jpg';

const Card = () => {
  return (
    <div className="card">
      <div className="wrapper">
        <img src={banner} className="card-top-img" alt="Banner" />
        <div className="overlay"></div>
        <button className="btn btn-tas demo">Demo</button>
      </div>

      <div className="content">
        <h4>Product Name</h4>
        <p>Product Description</p>
        <p>Want to put your own image in the circle?</p>
        <div className="boxes">
          <div className="basic">
            <p>Basic</p>
          </div>
          <div className="basic">
            <p>Value</p>
          </div>
          <div className="basic">
            <p>Prime</p>
          </div>
        </div>
        <hr />
        <div className="prices">
          <p>
            <span className="strike">1499/month</span>{' '}
            <span className="off">34%</span>
          </p>
          <button className="btn btn-tas">
            <p>₹999</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
