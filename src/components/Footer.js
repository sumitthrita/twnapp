import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import Image from "./logo.jpeg";

import { Navbar} from "react-bootstrap";


const Footer = () => (
  <footer>
    <div className="footer__main">
      <div className="footer__mainItems">
        <div className="footer__logo">
          <Navbar.Brand href="/">
            <img className="footer__logoImage" src={Image} alt="twn-logo" />
          </Navbar.Brand>

          <ul className="footer__logoSubtitle">
            <li>
              <h5 className="fsubtitle">The Wheels Nation</h5>
            </li>
          </ul>
        </div>
      </div>

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
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="footer__mainItems">
        <h4 className="footer__title">About Us</h4>
        <ul className="footer__subtitle">
          <li>How do we function</li>
          <li>Why choose us</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="footer__mainItems">
        <h4 className="footer__title">Stay Updated With Us</h4>
        <p style={{ color: "#bbb" }} className="footer__subtitle">
          Subscribe to out newsletter to get our latest updates.
        </p>
        <form className="footer__form">
          <input
            type="email"
            name="email"
            placeholder="Enter EmailId"
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
          <a href="https://www.facebook.com/thewheelsnation/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/thewheelsnation?igshid=sasuoomirnnx">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/thewheelsnation?s=09">
            <TwitterIcon />
          </a>
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
