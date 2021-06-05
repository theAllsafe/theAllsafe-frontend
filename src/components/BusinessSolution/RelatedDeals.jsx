import React, { useState, useEffect } from 'react';
import Card from '../Collections/Card';

import axios from 'axios';

const RelatedDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://tas-server.herokuapp.com/api/projects')
      .then((res) => setData(res.data));
  }, []);
  const collection = data.filter((el) => el.collectionItem);

  return (
    <div className="x_container">
      {collection.map((item) => (
        <Card width={330} key={item._id} data={item} />
      ))}
    </div>
  );
};

export default RelatedDeals;
