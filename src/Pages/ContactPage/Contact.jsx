import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="get-in-touch-text-container">
          <h2 className="getin-text">Get In</h2>
          <h2 className="touch-text">Touch</h2>
        </div>

        <div class="contact-form">
          <span class="heading">Contact Me</span>
          <form>
            <label for="name">Name:</label>
            <input type="text" required="" />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required="" />
            <label for="message">Message:</label>
            <textarea id="message" name="message" required=""></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
