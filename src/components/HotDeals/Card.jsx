import React, { useState } from 'react';
import banner from './res/banner.jpg';

const Card = ({ data: { type, price } }) => {
  const [pricing, setPricing] = useState(null);

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
          <div
            tabIndex="1"
            className="basic"
            onClick={() => {
              if (type === 'basic') setPricing(price);
            }}
          >
            <p>Basic</p>
          </div>
          <div
            tabIndex="2"
            className="basic"
            onClick={() => {
              if (type === 'value') setPricing(price);
            }}
          >
            <p>Value</p>
          </div>
          <div
            tabIndex="3"
            className="basic"
            onClick={() => {
              if (type === 'prime') setPricing(price);
            }}
          >
            <p>Prime</p>
          </div>
        </div>
        <hr />
        <div className="prices">
          <p>
            <span className="strike">{pricing}/month</span>{' '}
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
