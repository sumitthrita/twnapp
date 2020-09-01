import React from "react";
import "./Footer.css";
import fb from "./fb.jpeg";
import instagram from "./instagram.jpeg";
const Footer = () => (
  <footer>
    <div className="footer__main">
      <div className="footer__mainItems">
        <h4 className="footer__title">Menu</h4>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Blogs</li>
        </ul>
      </div>

      <div className="footer__mainItems">
        <h4 className="footer__title">About Us</h4>
        <ul>
          <li>How Do We Function</li>
          <li>Why Choose Us</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="footer__mainItems">
        <h2 className="footer__title">Contact</h2>
        <ul>
          <li>Address,Bangalore</li>
          <li>+91 7905162191 , +91 790872380</li>
        </ul>
      </div>

      <div className="footer__mainItems">
        <h2 className="footer__title">Stay Updated With Us</h2>
        <p>Subscribe to out newsletter to get our latest updates.</p>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
          ></input>
          <input type="submit" value="Subscribe"></input>
        </form>
      </div>
    </div>

    <div className="footer__social">
      <ul class="footer__socialList">
        <li>
          <a href="./App.js">
            <i class="footer__socialFacebook"></i>
            <img src={fb} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="./App.js">
            <i class="footer__socialInstagram"></i>
            <img src={instagram} alt="instagram" />
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