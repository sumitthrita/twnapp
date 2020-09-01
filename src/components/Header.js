import React from 'react';
import Image from './logo.jpeg';
import './Header.css';
import {Navbar,Nav} from 'react-bootstrap';



const Header =()=>{


return (
 <Navbar bg="dark" expand="lg" >
  <Navbar.Brand href="/"><img className="header__logoImage" src={Image} alt="twn-logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="right-element">
    <Nav className="mr-auto" >
      <Nav.Link href="/" ClassName="element" >Home</Nav.Link>
      <Nav.Link href="/services" ClassName="element" >Service</Nav.Link>
      <Nav.Link href="/blog" className="element" >Blog</Nav.Link>
      <Nav.Link href="/contact" className="element" >Contact</Nav.Link>
      <Nav.Link href="/login" className="element" >Login</Nav.Link>
      <Nav.Link href="/signup" className="element" >SignUp</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar> 
)
}




export default Header; 
