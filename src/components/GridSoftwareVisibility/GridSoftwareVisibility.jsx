import React, { useState } from 'react';
import './Grid.css';
import { Link } from 'react-router-dom';
import data from './data';
import Item from './Item';

const GridSoftwareVisibility = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="grid">
          {data.map((el) => (
            <Item key={el.id} image={el.image} />
          ))}
          <div className="rightGrid"></div>
          <div className="rightGrid2"></div>
        </div>
      </div>
    </div>
  );
};

export default GridSoftwareVisibility;
