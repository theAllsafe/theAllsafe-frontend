import React, { useState } from 'react';
import './style.css';
import Logo from '../res/theAllsafe Blue All.png';
import close from '../res/cancel.png';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <div className="container-fluid topnavbar-custom">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="close">
        <Link to="/">
          <img src={close} alt="close" />
        </Link>
      </div>
    </div>
  );
}

export default CustomNavbar;
