import React, { useState, useEffect } from 'react';
import './Collections.css';
import Card from './Card';
import collection from './data';

import axios from 'axios';
import Loader from '../../Loader';

function ICollection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://tas-server.herokuapp.com/api/projects')
      .then((res) => setData(res.data));
  }, []);

  const products =
    data.length &&
    data.filter(
      (el) =>
        el.category === 'Business Solution' &&
        el.subcategory === 'Inventory Management'
    );

  return (
    <>
      <div className="c_container">
        {products.length ? (
          products.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <Loader />
        )}
      </div>
      {/* <SafetyBanner /> */}
    </>
  );
}

export default ICollection;
