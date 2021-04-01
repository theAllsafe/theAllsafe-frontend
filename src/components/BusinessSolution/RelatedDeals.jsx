import React from 'react';
import collection from '../Collections/data';
import Card from '../Collections/Card';

const RelatedDeals = () => {
  let latestCollection = collection.slice(0, 3);

  return (
    <div className="x_container">
      {latestCollection.map((item) => (
        <Card width={330} key={item.id} data={item} />
      ))}
    </div>
  );
};

export default RelatedDeals;
