import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './BlockMenu.css';

import { Link } from 'react-router-dom';
import Loader from '../Loader';

const BlockMenu = () => {
  const [mainMenu, setMainMenu] = useState([]);
  const icons = [
    './icon/BusinessSolution.png',
    './icon/E-Commerce.png',
    './icon/Education.png',
    './icon/Healthcare.png',
    './icon/HumanResource.png',
    './icon/NewsAndBlogs.png',
    './icon/OnlineReservation.png',
    './icon/HotelAndResturant.png',
    './icon/OTTPlatform.png',
    './icon/Others.png',
  ];
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

  useEffect(() => {
    axios
      .get('https://tas-server.herokuapp.com/api/category')
      .then((res) => setMainMenu(res.data));
  }, []);

  if (mainMenu.length) {
    mainMenu.map((el, index) => {
      el.iconUrl = icons[index];
      el.link = links[index];
    });
  }

  return (
    <div className="blockmenu container-fluid">
      {mainMenu.length ? (
        mainMenu.map((el) => (
          <Link to={el.link}>
            <ul class="menu">
              <li className="box">
                <img src={el.iconUrl} className="img-fluid" />
                <div className="o">
                  <p>{el.categoryName}</p>
                </div>
                <ul className="submenu">
                  {el.subCategories.map((item) => (
                    <li>
                      <a href="#">{item.subCategoryName}</a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </Link>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlockMenu;
