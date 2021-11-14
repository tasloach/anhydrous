import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-us">Contact us.</div>
      <div className="contact-contents">
        <form action="POST" id="contact-form">
          <div className="name">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              className="firstName"
              tabIndex="1"
              placeholder="Enter your first name"
            />
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              className="lastName"
              tabIndex="2"
              placeholder="Enter your last name"
            />
          </div>
          <div className="email">
            <label htmlFor="email">E-mail address</label>
            <input
              type="text"
              name="email"
              className="email"
              tabIndex="3"
              placeholder="Enter your e-mail address"
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Start typing..."
              className="message"
              name="message"
              tabIndex="4"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
