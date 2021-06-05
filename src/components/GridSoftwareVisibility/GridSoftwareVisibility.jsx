import React, { useState, useEffect } from 'react';
import './Grid.css';
import { Link } from 'react-router-dom';

import Item from './Item';
import Loader from '../Loader';

import axios from 'axios';
import { data as datas } from './data';

const GridSoftwareVisibility = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://tas-server.herokuapp.com/api/category')
      .then((res) => setData(res.data));
  }, []);

  const links = [
    '/businessSolution',
    '/ecommerce',
    '/education',
    '/healthcare',
    '/humanresource',
    '/newsandblog',
    '/onlinereservation',
    '/hotelandrestaurant',
    '/ottplatform',
    '/others',
  ];

  let len = data && data.length;

  let obj = {};

  if (data.length) {
    for (let i = 0; i < len; i++) {
      obj[i] = data[i].subCategories;
    }
  }

  Object.entries(obj).length !== 0 &&
    datas.map((el, index) => {
      el.subCategory = obj[index];
      el.link = links[index];
    });

  return (
    <div className="container-fluid ">
      {data.length ? (
        <>
          <div className="row">
            <div className="grid">
              {datas.map((el) => (
                <Item
                  key={el.id}
                  image={el.image}
                  subCategory={el.subCategory}
                  link={el.link}
                />
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GridSoftwareVisibility;
