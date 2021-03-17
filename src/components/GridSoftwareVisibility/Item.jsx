import React from 'react';
import logo from './box.svg';

const Item = ({ image }) => {
  return (
    <>
      <div className="item">
        <img src={image} className="img-fluid" alt="product image" />
        <div className="product">
          <div className="iconContainer">
            {[1, 2, 3, 4, 5].map((el) => (
              <div className="icons">
                <i className="fas fa-box"></i>
              </div>
            ))}
          </div>
          <button className="viewall">View All</button>
        </div>
      </div>
    </>
  );
};

export default Item;
