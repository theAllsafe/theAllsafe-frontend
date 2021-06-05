import React, { useState, useEffect } from 'react';
import { Tab, TabContainer, Nav, Row, Col } from 'react-bootstrap';
import banner from './res/banner.jpg';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  let prices = [];
  let offerPrices = [];

  const {
    hotOfferItem: { basic, value, prime },
  } = data;

  prices.push(basic.basePrice, value.basePrice, prime.basePrice);
  offerPrices.push(basic.offerPrice, value.offerPrice, prime.offerPrice);

  const [pricing, setPricing] = useState(prices[0]);
  const [offerPricing, setOfferPricing] = useState(offerPrices[0]);
  const [percentage, setPercentage] = useState(0);

  const clickHandler = (id, type) => {
    if (id) {
      setPricing(prices[id - 1]);
      setOfferPricing(offerPrices[id - 1]);
    }
  };

  useEffect(() => {
    let x = pricing - offerPricing;
    let y = (x / pricing) * 100;
    setPercentage(Math.floor(y));
  }, [pricing, offerPricing]);

  return (
    <div className="card">
      <div className="wrapper">
        <img
          src={data.image ? data.image : banner}
          className="card-top-img"
          alt="Banner"
        />
        <div className="overlay"></div>

        <a target="_blank" className="btn demo" href={data.demoUrl}>
          Demo
        </a>
        {/* <button ></button> */}
      </div>

      <div className="content">
        <h4>{data.name}</h4>
        <p style={{ fontSize: 16 }}>
          {data.description
            ? data.description
            : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, sit eum! Numquam aperiam quo beatae.'}
        </p>
        <p>Want to put your own image in the circle?</p>
        <div className="boxes">
          <Tab.Container defaultActiveKey={1}>
            <Nav variant="pills">
              {[
                { id: 1, type: 'Basic' },
                { id: 2, type: 'Value' },
                { id: 3, type: 'Prime' },
              ].map((el) => (
                <Nav.Item>
                  <Nav.Link
                    eventKey={el.id}
                    onClick={() => clickHandler(el.id)}
                    className="basic"
                  >
                    {el.type}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Tab.Container>
        </div>
        <hr />
        <div className="prices">
          <p>
            <span className="strike">₹{pricing}/month</span>{' '}
            <span className="off">{percentage}%</span>
          </p>
          <button className="btn btn-tas">
            <p>₹{offerPricing}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
