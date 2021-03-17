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
      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={Business} className="img-fluid" />
            <p>Business Solution</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1">Inventory Management</li>
              <li class="dropdown_item-2">POS System</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon2} className="img-fluid" />
            <p>E-Commerce</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1">Single Vendor</li>
              <li class="dropdown_item-2">Multi Vendor</li>
              <li class="dropdown_item-3"> Grocery Store - Single Vendor</li>
              <li class="dropdown_item-3"> Grocery Store - Multi Vendor</li>
              <li class="dropdown_item-3"> Flower and Gifts</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon3} className="img-fluid" />
            <p>Education</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1"> School Management System</li>
              <li class="dropdown_item-2"> Library Management System</li>
              <li class="dropdown_item-3"> E-Class Sharing Portal</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon4} className="img-fluid" />
            <p>Health Care</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1">Hospital Management System</li>
              <li class="dropdown_item-2"> Pharma</li>
              <li class="dropdown_item-3"> POS Chemist</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon5} className="img-fluid" />
            <p>Human Resource</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1"> Job Portal</li>
              <li class="dropdown_item-2"> HR Management System</li>
              <li class="dropdown_item-3"> News & Blogs</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon6} className="img-fluid" />
            <p>News &amp; Blogs</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1">News Portal</li>
              <li class="dropdown_item-2"> Blog Portal</li>
              <li class="dropdown_item-3"> Sarkari Job Portal</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon7} className="img-fluid" />
            <p>Online Reservation</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1"> Cab Booking</li>
              <li class="dropdown_item-2"> Bus Booking</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon8} className="img-fluid" />
            <p>Hotel &amp; Restaurant</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1"> Hotel Booking</li>
              <li class="dropdown_item-2"> Booking Integration</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon9} className="img-fluid" />
            <p>OTT Platform</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1">Multi Video Platform</li>
              <li class="dropdown_item-2"> Like TVideo</li>
              <li class="dropdown_item-3">Item 3</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="x">
        <ul class="menu">
          <li class="dropdown dropdown-6" id="box">
            <img src={icon10} className="img-fluid" />
            <p>Others</p>
            <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
              <li class="dropdown_item-1">Item 1</li>
              <li class="dropdown_item-2">Item 2</li>
              <li class="dropdown_item-3">Item 3</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlockMenu;
