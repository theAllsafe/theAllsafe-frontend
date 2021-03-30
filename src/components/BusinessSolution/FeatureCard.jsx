import React from 'react';
import { Fade } from 'react-reveal';

const FeatureCard = ({ data }) => {
  return (
    <Fade bottom>
      <div className="card ">
        <div className="card-body">
          <span className="featur">{data.id}</span>
          <h5 className="card-title featur1">{data.title}</h5>
          <p className="card-text">{data.desc}</p>
        </div>
      </div>
    </Fade>
  );
};

export default FeatureCard;
