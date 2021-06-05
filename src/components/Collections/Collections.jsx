import React, { useState, useEffect } from 'react';
import './Collections.css';
import HeadMenu from '../HeadMenu/HeadMenu';
import Footer from '../Footer/Footer';
import SafetyBanner from '../SafetyBanner/SafetyBanner';
import NavBar from '../NavBar/NavBar';
import Card from './Card';

import Loader from '../Loader';

// import collection from './data';
import axios from 'axios';

function Collections() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://tas-server.herokuapp.com/api/projects')
      .then((res) => setData(res.data));
  }, []);

  // const collectionItems = data.filter((el) => el.collectionItem === true);
  // console.log(collectionItems);
  return (
    <>
      <NavBar />
      <div className="menu-head" align="center">
        <HeadMenu />
      </div>
      {data.length ? (
        <div className="c_container">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      {/* <SafetyBanner /> */}
      <Footer />
    </>
  );
}

export default Collections;
