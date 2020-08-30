import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button.js';
import Image from './logo.jpeg';
import './Header.css'

const Header=()=>{
    return (
    <header className="header">
       <div className='header__logo' >
         <img className="header__logoImage" src={Image} alt="twn-logo" />
       </div>
       <div> </div>
       <div className='header__navbar' >
          <Link to='/Homepage' title="go to home" className="header__navbarElement">Home</Link>
          <Link to="/Blog" title="go to blogs" className="header__navbarElement">Blog</Link>
       </div>
       <div>
          {/* <Button buttonName="Blogs"  buttonDestination="/Blog" /> */}
          <Button />
       </div>
    </header>    
    );
};
export default Header; 
