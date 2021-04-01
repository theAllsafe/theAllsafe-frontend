import React, { useState } from 'react';
import './ContactUs.css';
import NavBar from '../NavBar/NavBar';
import { InputGroup, FormControl } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <section className="contactus">
        <div className="row">
          <div className="col-md-4 left_contact">
            <div className="addressContainer">
              <h3>Address</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim praesentium, voluptatum itaque numquam temporibus?
              </p>
              <p>email: contact@allsafe.com</p>
            </div>
            <div className="iconContainerx">
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>

          <div className="col-md-8 formContainer right_contact">
            <div className="accounts-content" style={{ marginTop: '16px' }}>
              <div className="heading">
                <h2 style={{ textAlign: 'center' }}>
                  Contact <span className="ship">Us</span>
                </h2>
              </div>
              <p
                style={{ marginTop: -40, marginBottom: 50 }}
                className="text-center"
              >
                Feel free to drop us a line below!
              </p>

              <div className="register-form-div" align="center">
                <div className="row">
                  <div className="col-md-12">
                    <form>
                      <div class="mb-3">
                        <i class="fa fa-user"></i>

                        <input
                          type="text"
                          class="form-control accounts-register-form"
                          placeholder="Full Name"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-md-6">
                    <form>
                      <div class="mb-3">
                        <i class="fa fa-envelope"></i>

                        <input
                          type="email"
                          class="form-control accounts-register-form"
                          placeholder="Email"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <form>
                      <div class="mb-3">
                        <i class="fa fa-phone"></i>

                        <input
                          type="text"
                          class="form-control accounts-register-form"
                          placeholder="Mobile Number"
                          id="exampleInputEmail1"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-12">
                    <InputGroup>
                      <FormControl as="textarea" placeholder="Message" />
                    </InputGroup>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    class="btn btn-outline-primary accounts-btn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
