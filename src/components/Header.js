import React,{useState} from 'react';
import { Link } from 'react-router-dom'; 
import Image from './logo.jpeg';
import './Header.css'

function myfunction(){
   var x=document.getElementById("myTopnav");
   if(x.className==="topnav"){
      x.className+=" responsive";
   } else {
      x.className="topnav";
   }}

const Header=()=>{
 
    return (
    <header className="header__main">
      <nav className="topnav" id="myTopnav" >
       <div className="topnav__logo" >
       <img className="header__logoImage" src={Image} alt="twn-logo" />
       </div>
       <div className="topnav__list">
          <ul>
             <li><Link to='/signup'  className="header__navbarElement"  >SignUp</Link></li>
             <li><Link to='/login'  className="header__navbarElement">Login</Link></li>
             <li><Link to='/contact'  className="header__navbarElement">Contact</Link></li>
             <li><Link to='/blog'  className="header__navbarElement">Blog</Link></li>
             <li><Link to='/services'  className="header__navbarElement"  >Services</Link></li>
             <li><Link to='/'  className="header__navbarElement">Home</Link></li>
             <li><Link href="javascript:void(0);" className="icon" onClick={myfunction}><i className="fa fa-bars"></i></Link> </li>
          </ul>
       </div>
      </nav>
       
    </header>    
    );
};
export default Header; 
// {/* <div className='header__logo' >
//          <img className="header__logoImage" src={Image} alt="twn-logo" />
//        </div>
//        <div> <div></div>
       
//        <div className='header__navbar' >
//           <Link to='/'  className="header__navbarElement">Home</Link>
//           <Link to="/blog" className="header__navbarElement">Blog</Link>
//        </div>
       
//        <div>
//           {/* <Button buttonName="Blogs"  buttonDestination="/Blog" /> */}
//          //  <Button />
//       //  </div> */}
