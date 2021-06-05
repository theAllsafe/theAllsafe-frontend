import React, { useState, useEffect } from 'react';
import './Collections.css';
import Card from './Card';
import collection from './data';
import HeadMenu from '../Headmenu/HeadMenu';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';

import axios from 'axios';
import Loader from '../../Loader';

function POSCollection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://tas-server.herokuapp.com/api/projects')
      .then((res) => setData(res.data));
  }, []);

  const products =
    data.length &&
    data.filter(
      (el) =>
        el.category === 'Business Solution' && el.subcategory === 'POS System'
    );

  return (
    <>
      <NavBar />
      <div className="heading">
        <h2>
          Business <span className="ship">Solutions</span>
        </h2>
      </div>
      <HeadMenu />
      <div className="c_container">
        {products.length ? (
          products.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </>
  );
}

export default POSCollection;
