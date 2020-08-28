import React from 'react';

const Footer = () => (
    <footer className="Footer">
         <div className="Email Subscription">
         <input type="text" placeholder="Email"/>
         <button>Subscribe</button>
         </div>
         <div className="Separater">
         </div>
         <div className="Address-Section">
             <div className="Address-Wrapper">
                <div className="The-Wheels-Nation">
                    <h3>The Wheels Nation</h3>
                    <p>Address,Bangalore</p>
                </div>
                <div className = "Menu">
                    <h3>MENU</h3>
                    <h5>Services</h5>
                    <h5>Blog</h5>
                </div>

                <div className="About-Us">
                <h3>About Us</h3>
                <h5>How Do We Function</h5>
                <h5>Why Choose Us</h5>
                <div className = "Social-Media">
                    <h3 className = "title">Social Media</h3>
                    <div className="icons-Wrapper">    
                    </div>
                </div>
                 </div>
               
             </div>
         </div>

    </footer>
)
export default Footer;
