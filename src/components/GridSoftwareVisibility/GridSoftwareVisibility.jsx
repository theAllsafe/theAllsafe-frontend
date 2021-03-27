import React, { useState } from 'react';
import './Grid.css';
import { Link } from 'react-router-dom';
import data from './data';
import Item from './Item';

const GridSoftwareVisibility = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="grid">
          {data.map((el) => (
            <Item key={el.id} image={el.image} items={el.items} />
          ))}

          <div className="rightGrid">
            <div className="fire"></div>
            <h5>Hot Offers</h5>
            <h6>
              <Link to="/hotdeals">Check out Our Weekly Hot Deals </Link>
            </h6>
          </div>

          <div className="rightGrid2"></div>
        </div>
      </div>
    </div>
  );
};

export default GridSoftwareVisibility;
