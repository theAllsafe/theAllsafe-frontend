import React from 'react';
import './HotDeals.css';

import Footer from '../Footer/Footer';

import SafetyBanner from '../SafetyBanner/SafetyBanner';
import NavBar from '../NavBar/NavBar';
import Card from './Card';

function HotDeals() {
  const data = [
    {
      productId: 1,
      productName: 'Sample-1',
      productDesc: 'Product Description...',
      prices: [1499, 1599, 1999],
    },
    {
      productId: 2,
      productName: 'Sample-2',
      productDesc: 'Product Description...',
      prices: [1799, 1999, 2199],
    },
    {
      productId: 3,
      productName: 'Sample-3',
      productDesc: 'Product Description...',
      prices: [499, 799, 999],
    },
  ];
  return (
    <>
      <NavBar />

      <div className="hotDeals">
        {data.map((el) => (
          <Card key={el.productId} data={el} />
        ))}
      </div>
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default HotDeals;
