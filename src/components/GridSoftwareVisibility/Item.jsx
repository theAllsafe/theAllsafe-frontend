import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import logo from './box.svg';

const Item = ({ image, items }) => {
  const renderTooltip = (props) => {
    console.log(props);
    return (
      <Tooltip id="button-tooltip" {...props}>
        Sample Tooltip
      </Tooltip>
    );
  };
  return (
    <>
      <div className="item">
        <img src={image} alt="product image" />
        <div className="product">
          <div className="iconContainer">
            {items.map((el) => (
              <OverlayTrigger
                placement="right"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip}
                title="hello"
              >
                <div className="icons">
                  <i className="fas fa-box"></i>
                </div>
              </OverlayTrigger>
            ))}
          </div>
          <button className="viewall">View All</button>
        </div>
      </div>
    </>
  );
};

export default Item;
