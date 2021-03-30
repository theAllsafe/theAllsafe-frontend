import React from 'react';

const FeatureCard = ({ data }) => {
  return (
    <div className="card ">
      <div className="card-body">
        <span className="featur">{data.id}</span>
        <h5 className="card-title featur1">{data.title}</h5>
        <p className="card-text">{data.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
