import React, { useState } from 'react';
import { Tab, TabContainer, Nav, Row, Col } from 'react-bootstrap';
import banner from './res/banner.jpg';

const Card = ({ data: { productName, productDesc, prices, productId } }) => {
  const [pricing, setPricing] = useState(prices[0]);

  const clickHandler = (id, type) => {
    if (id) {
      setPricing(prices[id - 1]);
    }
  };

  return (
    <div className="card">
      <div className="wrapper">
        <img src={banner} className="card-top-img" alt="Banner" />
        <div className="overlay"></div>
        <button className="btn btn-tas demo">Demo</button>
      </div>

      <div className="content">
        <h4>{productName}</h4>
        <p>{productDesc}</p>
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
