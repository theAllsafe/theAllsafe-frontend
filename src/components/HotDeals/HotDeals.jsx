import React from 'react';
import './HotDeals.css';

import Footer from '../Footer/Footer';

import SafetyBanner from '../SafetyBanner/SafetyBanner';
import NavBar from '../NavBar/NavBar';
import Card from './Card';

function HotDeals() {
  const data = [
    {
      type: 'basic',
      price: 1499,
    },
    {
      type: 'value',
      price: 1599,
    },
    {
      type: 'prime',
      price: 1699,
    },
  ];
  return (
    <>
      <NavBar />

      <div className="hotDeals">
        {data.map((el) => (
          <Card data={el} />
        ))}
      </div>
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default HotDeals;
