import React from 'react';
import Image from './logo.jpeg';
import './Header.css'
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 



const HeadBoot =()=>{


return (
 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><img className="header__logoImage" src={Image} alt="twn-logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" className="right_element" >Home</Nav.Link>
      <Nav.Link href="/services" className="right_element" >Service</Nav.Link>
      <Nav.Link href="/blog" className="right_element" >Blog</Nav.Link>
      <Nav.Link href="/contact" className="right_element" >Contact</Nav.Link>
      <Nav.Link href="/login" className="right_element" >Login</Nav.Link>
      <Nav.Link href="/signup" className="right_element" >SignUp</Nav.Link>

      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    
  </Navbar.Collapse>
</Navbar> 
)
}
export default HeadBoot;