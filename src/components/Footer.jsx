import React, { useState } from 'react';
import './/..//styles//footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle subscription form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }
    // Dummy subscription logic, replace with real API call if needed
    setMessage(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-logo">
          {/* Simple text logo or replace with an SVG/logo image */}
          <span className="logo-text">ARYA.DEV</span>
        </div>

        <span className="copyright">© {currentYear} Your Name. All rights reserved.</span>

        <form className="subscribe-form" onSubmit={handleSubscribe} noValidate>
          <label htmlFor="subscribe-email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="subscribe-email"
            name="subscribe-email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="subscribe-btn" aria-label="Subscribe to newsletter">
            Subscribe
          </button>
        </form>

        
          <div className="go-top-btn-outer">
          <button
            className="go-top-btn"
            onClick={scrollToTop}
            aria-label="Go to top"
            title="Go to top"
          > ↑ </button>
          </div>
        
      </div>
      {message && <p className="subscribe-message">{message}</p>}
    </footer>
  );
};

export default Footer;
