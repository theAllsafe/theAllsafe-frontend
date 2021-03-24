import React from 'react';
import './Blogs.css';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
function Blogs() {
  return (
    <div className="industries">
      {[
        {
          text: 'Health Care',
          icon: 'fa fa-heart',
        },
        {
          text: 'Education',
          icon: 'fa fa-graduation-cap',
        },
        {
          text: 'Retail',
          icon: 'fa fa-shopping-basket',
        },
        {
          text: 'Logistics',
          icon: 'fa fa-truck',
        },
        {
          text: 'Travel',
          icon: 'fa fa-plane ',
        },
        {
          text: 'Media',
          icon: 'fa fa-film ',
        },
        {
          text: 'Real Estate',
          icon: 'fa fa-building ',
        },

        {
          text: 'Colleges',
          icon: 'fa fa-university ',
        },
      ].map((el) => (
        <div className="icon-area text-center">
          <div className="icon-feature">
            <i className={el.icon}></i>
          </div>

          <div className="content-feature-text">
            <h4>{el.text}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
