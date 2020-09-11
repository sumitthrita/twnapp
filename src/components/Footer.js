import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="footer__main">
      <div className="footer__mainItems">
        <h4 className="footer__title">Menu</h4>
        <ul className="footer__subtitle">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </div>

      <div className="footer__mainItems">
        <h4 className="footer__title">About Us</h4>
        <ul className="footer__subtitle">
          <li>How Do We Function</li>
          <li>Why Choose Us</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="footer__mainItems">
        <h2 className="footer__title">Contact</h2>
        <ul className="footer__subtitle">
          <li>Address </li>
          <li>+91 7905162191 </li>
          <li> +91 790872380</li>
        </ul>
      </div>

      <div className="footer__mainItems">
        <h2 className="footer__title">Stay Updated With Us</h2>
        <p style={{ color: "#bbb" }} className="footer__subtitle">
          Subscribe to out newsletter to get our latest updates.
        </p>
        <form className="footer__form">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            className="footer__formEmail"
          ></input>
          <input
            type="submit"
            value="Subscribe"
            className="footer__subscribe"
          ></input>
        </form>
      </div>
    </div>

    <div className="footer__social">
      <ul class="footer__socialList">
        <li>
          <Link to="/">
            <FacebookIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <InstagramIcon />
          </Link>
        </li>
      </ul>
    </div>

    <div className="footer__legal">
      <ul className="footer__legalList">
        <li>
          <a href="./App.js">Terms &amp; Conditions</a>
        </li>
        <li>
          <a href="./App.js">Privacy Policy</a>
        </li>
        <li>&copy; 2019 Copyright The Wheels Nation</li>
      </ul>
    </div>
  </footer>
);
export default Footer;
