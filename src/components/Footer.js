import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from mettā muse.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>
            <span role="img" aria-label="currency">
              🇺🇸
            </span>{" "}
            USD
          </p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>

        <div className="footer-links">
          <div>
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <i className="instagram">📷</i>
            <i className="linkedin">🔗</i>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img
              src="https://via.placeholder.com/40x20?text=GPay"
              alt="Google Pay"
            />
            <img
              src="https://via.placeholder.com/40x20?text=Visa"
              alt="Visa"
            />
            <img
              src="https://via.placeholder.com/40x20?text=MasterCard"
              alt="MasterCard"
            />
            <img
              src="https://via.placeholder.com/40x20?text=PayPal"
              alt="PayPal"
            />
            <img
              src="https://via.placeholder.com/40x20?text=AMEX"
              alt="American Express"
            />
            <img
              src="https://via.placeholder.com/40x20?text=ApplePay"
              alt="Apple Pay"
            />
            <img
              src="https://via.placeholder.com/40x20?text=O+Pay"
              alt="O+Pay"
            />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
