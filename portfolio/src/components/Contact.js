import React from 'react';
import './ContactStyle.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch, please fill out the form below or contact me through the details provided.</p>

      <div className="contact-details">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: <a href="mailto:ronakbagri9@gmail.com">ronakbagri9@gmail.com</a></li>
          <li>Phone: +91 8534812347</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/ronakbagri" target="_blank" rel="noopener noreferrer">linkedin.com/in/ronakbagri</a></li>
          <li>GitHub: <a href="https://github.com/ronakbagri" target="_blank" rel="noopener noreferrer">github.com/ronakbagri</a></li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Send a Message</h2>
        <form action="https://formspree.io/f/mqazekez" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
