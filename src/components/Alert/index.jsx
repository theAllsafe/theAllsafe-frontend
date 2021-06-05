import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertMessage = ({ variant, message }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="mb-3">
      {show && (
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
          <p>{message}</p>
        </Alert>
      )}
    </div>
  );
};

export default AlertMessage;
