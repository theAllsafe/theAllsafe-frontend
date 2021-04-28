import React from 'react';
import ICollection from './Inventory/Collections';
import NavBar from '../NavBar/NavBar';
import HeadMenu from './Headmenu/HeadMenu';
import Inventory from './Inventory/InventoryMgmnt';
import Footer from '../Footer/Footer';

const CollectionWrapper = () => {
  return (
    <>
      <NavBar />
      <div className="heading">
        <h2>
          Business <span className="ship">Solutions</span>
        </h2>
      </div>
      <HeadMenu />
      <ICollection />
      <Footer />
    </>
  );
};

export default CollectionWrapper;
