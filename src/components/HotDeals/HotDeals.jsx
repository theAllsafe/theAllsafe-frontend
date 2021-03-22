import React from 'react';
import './HotDeals.css';

import Footer from '../Footer/Footer';

import SafetyBanner from '../SafetyBanner/SafetyBanner';
import NavBar from '../NavBar/NavBar';
import Card from './Card';

function HotDeals() {
  return (
    <>
      <NavBar />

      <div className="hotDeals">
        {[1, 2, 3].map((el) => (
          <Card />
        ))}
      </div>
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default HotDeals;
