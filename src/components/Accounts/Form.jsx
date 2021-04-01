import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const FormContainer = () => {
  return (
    <div className="formContainer">
      <Form>
        <div className="row">
          <div className="col-sm-12">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-user-3-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Full Name" required />
            </InputGroup>
          </div>
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-mail-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Email" required />
            </InputGroup>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-phone-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Mobile Number" required />
            </InputGroup>
          </div>
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-flag-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Password" required />
            </InputGroup>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-flag-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Re-Type Password"
                required
              />
            </InputGroup>
          </div>
        </div>

        <Button className="btn btn-register" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default FormContainer;
