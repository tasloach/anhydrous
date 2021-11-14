import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter href receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              className="footer-input"
              name="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="/sign-up">How it works</a>
            <a href="/">Testimonials</a>
            <a href="/">Careers</a>
            <a href="/">Investors</a>
            <a href="/">Terms of Service</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact-us">Contact</Link>
            <a href="/">Support</a>
            <a href="/">Destinations</a>
            <a href="/">Sponsorships</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a>
            <a href="/">Ambassadors</a>
            <a href="/">Agency</a>
            <a href="/">Influencer</a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="social-logo">
              Anhydrous <i className="fab fa-typo3" />
            </a>
          </div>
          <small className="website-rights">Anhydrous &copy;2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="/"
              target="_blank"
              rel="noreferrer"
              arial-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              arial-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              arial-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="social-icon-link twitter"
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              arial-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/tasloach/"
              target="_blank"
              rel="noreferrer"
              arial-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
