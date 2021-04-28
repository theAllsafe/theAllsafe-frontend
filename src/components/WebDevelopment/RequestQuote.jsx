import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const RequestQuote = () => {
  return (
    <div className="formContainer">
      <h3 className="reqQuote">Request A Free Quote</h3>
      <Form>
        <div className="row">
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-user-3-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Your Name" required />
            </InputGroup>
          </div>
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-mail-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Your Email" required />
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
              <Form.Control
                type="text"
                placeholder="Your Phone Number"
                required
              />
            </InputGroup>
          </div>
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-flag-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="Country" required />
            </InputGroup>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-clipboard-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="I am interested in"
                required
              />
            </InputGroup>
          </div>
          <div className="col-sm-6">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-map-pin-user-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="How did you find us"
                required
              />
            </InputGroup>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-sm-12">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-time-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="When do you want to get started"
                required
              />
            </InputGroup>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-sm-12">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="ri-chat-3-fill"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as="textarea"
                placeholder="Your Message"
                rows={3}
                required
              />
            </InputGroup>
          </div>
        </div>

        <div className="flex-x">
          <label class="custom-file-upload">
            <input type="file" />
            <i className="ri-upload-2-fill"></i> Browse
          </label>

          <Button className="btn btn-tas lg" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RequestQuote;
