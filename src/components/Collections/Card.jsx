import React from 'react';

const Card = ({ data, width }) => {
  return (
    <div style={width && { width: width }} className="card">
      {data.sale && <span className="sale">SALE</span>}
      <img src={data.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h4 className="card-title">{data.name}</h4>
        {data.offerPrice ? (
          <p className="price">
            <span className="d_price">₹{data.basePrice}</span>{' '}
            <span className="text-dark">₹{data.offerPrice}</span>
          </p>
        ) : (
          <p className="price">₹{data.price}</p>
        )}

        <p className="card-text">
          {data.description
            ? data.description
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, distinctio voluptatibus perspiciatis officiis saepe aspernatur.'}
        </p>
      </div>
      <div className="buttonContainer">
        <button className="btn btn-blue">LIVE DEMO</button>
        <button className="btn btn-darkblue">BUY NOW</button>
      </div>
    </div>
  );
};

export default Card;
