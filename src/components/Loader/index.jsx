import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ top }) => {
  return (
    <div style={{ paddingBottom: 100, paddingTop: top && top }}>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: 100,
          height: 100,
          margin: 'auto',
          display: 'block',
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
