import React from 'react';
import './BlockMenu.css';
import Business from './icon/Business Solution.png';
import icon2 from './icon/E-Commerce.png';
import icon3 from './icon/Education.png';
import icon4 from './icon/Healthcare.png';
import icon5 from './icon/Human Resource.png';
import icon6 from './icon/News and Blogs.png';
import icon7 from './icon/Online Reservation.png';
import icon8 from './icon/Hotel and Resturant.png';
import icon9 from './icon/OTT Platform.png';
import icon10 from './icon/Others.png';

const BlockMenu = () => {
  return (
    <div className="blockmenu container-fluid">
      <ul class="menu">
        <li className="box">
          <img src={Business} className="img-fluid" />
          <div className="o">
            <p>Business Solution</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Inventory Management</a>
            </li>
            <li>
              <a href="#">POS System</a>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="menu">
        <li className="box">
          <img src={icon2} className="img-fluid" />
          <div className="o">
            <p>E-Commerce</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Single Vendor</a>
            </li>
            <li>
              <a href="#">Multi Vendor</a>
            </li>
            <li>
              <a href="#">Grocery Store - Single Vendor</a>
            </li>
            <li>
              <a href="#">Grocery Store - Multi Vendor</a>
            </li>
            <li>
              <a href="#">Flower and Gifts</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="menu">
        <li className="box">
          <img src={icon3} className="img-fluid" />
          <div className="o">
            <p>Education</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">School Management System</a>
            </li>
            <li>
              <a href="#">Library Management System</a>
            </li>
            <li>
              <a href="#">Learning Management System</a>
            </li>
            <li>
              <a href="#"> E-Class Sharing Portal</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="menu">
        <li className="box">
          <img src={icon4} className="img-fluid" />
          <div className="o">
            <p>Health Care</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Hospital Management System</a>
            </li>
            <li>
              <a href="#"> Pharma</a>
            </li>
            <li>
              <a href="#">POS Chemist</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="menu">
        <li className="box">
          <img src={icon5} className="img-fluid" />
          <div className="o">
            <p>Human Resource</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#"> Job Portal</a>
            </li>
            <li>
              <a href="#"> HR Management System</a>
            </li>
            <li>
              <a href="#">News &amp; Blogs</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="menu">
        <li className="box">
          <img src={icon6} className="img-fluid" />
          <div className="o">
            <p>News &amp; Blogs</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">News Portal</a>
            </li>
            <li>
              <a href="#">Blog Portal</a>
            </li>
            <li>
              <a href="#">Sarkari Job Portal</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="menu">
        <li className="box">
          <div>
            <img src={icon7} className="img-fluid" />
          </div>
          <div className="o">
            <p>Online Reservation</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Cab Booking</a>
            </li>
            <li>
              <a href="#">Bus Booking</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="menu">
        <li className="box">
          <img src={icon8} className="img-fluid" />
          <div className="o">
            <p>Hotel &amp; Restaurant</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Hotel Booking</a>
            </li>
            <li>
              <a href="#">Booking Integration</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="menu">
        <li className="box">
          <img src={icon9} className="img-fluid" />
          <div className="o">
            <p>OTT Platform</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Multi Video Platform</a>
            </li>
            <li>
              <a href="#">Like TVideo</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="menu">
        <li className="box">
          <img src={icon10} className="img-fluid" />
          <div className="o">
            <p>Others</p>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default BlockMenu;
