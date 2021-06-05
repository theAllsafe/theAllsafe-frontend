import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Loader from '../Loader';
import logo from './box.svg';

import { Link } from 'react-router-dom';

const Item = ({ image, subCategory, link }) => {
  console.log(link);
  return (
    <>
      {image && subCategory ? (
        <div className="item">
          <img src={image} alt="product image" />
          <div className="product">
            <div className="iconContainer">
              {subCategory.map((el) => (
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 100, hide: 100 }}
                  overlay={
                    <Tooltip key={el} id="button-tooltip">
                      {el.subCategoryName}
                    </Tooltip>
                  }
                >
                  <Link to={link}>
                    <div className="icons">
                      <i className="fas fa-box"></i>
                    </div>
                  </Link>
                </OverlayTrigger>
              ))}
            </div>
            <button className="viewall">View All</button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Item;
