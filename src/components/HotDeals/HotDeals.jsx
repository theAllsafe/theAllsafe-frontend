import React, { useState, useEffect } from 'react';
import './HotDeals.css';

import Footer from '../Footer/Footer';

import SafetyBanner from '../SafetyBanner/SafetyBanner';
import NavBar from '../NavBar/NavBar';
import Card from './Card';
import Loader from '../Loader';

import axios from 'axios';

function HotDeals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://tas-server.herokuapp.com/api/projects')
      .then((res) => setData(res.data));
  }, []);

  const hotDeals = data.filter((el) => el.hotOfferItem.isHotOffer);

  return (
    <>
      <NavBar />

      {data.length ? (
        <div className="hotDeals">
          {hotDeals.map((el) => (
            <Card key={el._id} data={el} />
          ))}
        </div>
      ) : (
        <Loader top={100} />
      )}
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default HotDeals;
