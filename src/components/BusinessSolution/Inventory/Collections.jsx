import React from 'react';
import './Collections.css';
import Card from './Card';
import collection from './data';

function ICollection() {
  return (
    <>
      <div className="c_container">
        {collection.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {/* <SafetyBanner /> */}
    </>
  );
}

export default ICollection;
