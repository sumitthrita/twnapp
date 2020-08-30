import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
         <div className="footer_main">
         <div className="footer_wrapper">
         <div className = "footer_Menu">
                 <h4>Menu</h4>
                 <p>Services</p>
                 <p>Blog</p>
          </div>         
          <div className = "footer_aboutUs">
                 <h4>About Us</h4>
                 <p>How Do We Function</p>
                 <p>Why Choose Us</p>
          </div>
          
         
           <div className ='footer_contact'>
               <h4>Contact</h4>
             <p>Address,Bangalore</p>
             <p>+91 7905162191 , +91 790872380</p>
          </div>
          </div>
          </div>

          <div className = "footer_emailSubscribe">
              <h2 className ='footer_title'>Stay Updated With Us</h2>
              <p>Subscribe to out newsletter to get our latest updates.</p>
              <form>
                  <input type="email" name="email" placeholder="Enter Your Email Address"></input>
                  <input type="submit" value="Subscribe"></input>
              </form>
         </div>
       
         <div className="footer__social">
             <ul class="footer_socialList">
                 <li><a href='./App.js'><i class = "footer_socialFacebook"></i></a></li>
                 <li><a href='./App.js'><i class = "footer_socialLinkedIn"></i></a></li>
                 <li><a href='./App.js'><i class = "footer_socialInstagram"></i></a></li>
             </ul>
         </div>
         <div className="footer_legal">
             <ul className = "footer_legalList">
                 <li><a href='./App.js'>Terms &amp Conditions</a></li>
                 <li><a href="./App.js">Privacy Policy</a></li>
                 <li>&copy; 2019 Copyright The Wheels Nation</li>
             </ul>
         </div>
    </footer>
);
export default Footer;
