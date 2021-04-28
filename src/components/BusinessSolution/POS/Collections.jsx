import React from 'react';
import './Collections.css';
import Card from './Card';
import collection from './data';
import HeadMenu from '../Headmenu/HeadMenu';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';

function POSCollection() {
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
        {collection.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default POSCollection;
