import React from 'react';
import './ContactUs.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import bg from './res/bg-01.jpg';

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.elements.fullname.value;
    const email = e.target.elements.email.value;
    const phonenumber = e.target.elements.phonenumber.value;
    const textarea = e.target.elements.textarea.value;
    console.log(fullname, email, phonenumber, textarea);
    axios
      .post(
        'https://sheet.best/api/sheets/89643199-b39a-4f9f-bb2a-8b86890e1773',
        {
          fullname: fullname,
          email: email,
          phonenumber: phonenumber,
          textarea: textarea,
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => {
        <h1>{error}</h1>;
      });
  };
  return (
    <>
      <NavBar />
      <div className="container-contact">
        <div className="contactus">
          <div className="c_formTitle">
            <span class="contact-form-title-1">Contact Us</span>
            <span class="contact-form-title-2">
              Feel free to drop us a line below!
            </span>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="inputGroup">
              <p>Full Name:</p>
              <div className="custom_input">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter Full Name"
                />
              </div>
            </div>
            <div className="inputGroup">
              <p>Email:</p>
              <div className="custom_input">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div className="inputGroup">
              <p>Phone Number:</p>
              <div className="custom_input">
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="inputGroup">
              <p>Message:</p>
              <div className="custom_input textarea">
                <textarea name="textarea"></textarea>
              </div>
            </div>
            <button className="btn btn-tas custom_btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
