import React, { useState } from 'react';
import './NavBar.css';
import Logo from './res/theAllsafe Blue All.png';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
function NavBar() {
  const [newclass, setClass] = useState('fa fa-plus');
  const MouseOver = () => {
    setClass('fa fa-chevron-down');
  };
  const MouseOut = () => {
    setClass('fa fa-plus');
  };

  return (
    <div className="container-fluid topnavbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navBox1">
        <ul>
          <li className="navbarLink" style={{ borderRight: '3px solid gold' }}>
            <Link to="/business">Business</Link>
          </li>
          <li className="navbarLink" style={{ borderRight: '3px solid gold' }}>
            <Link to="/applications">Applications</Link>
          </li>
          <li
            className="toggleDropdown"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            Overview <i className={newclass}></i>
            <Dropdown />
          </li>
        </ul>
      </div>
      <div className="navBox2">
        <form className="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn searchBtn" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="others">
          <Link to="#">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to="/accounts">
            <i className="fas fa-user-circle"></i>
          </Link>
          <Link to="/contactus">
            <p className="contact">Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="_c"></div>
    </div>
  );
}

export default NavBar;
