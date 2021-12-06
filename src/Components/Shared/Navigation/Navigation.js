import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo/logo.png';
import './Navigation.css';

const Navigation = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 106) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);


  return (
    <Navbar className={!navbar ? "navbar-ligth navbar-wrapper" : "navbar-dark navbar-wrapper"} expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
            <Nav.Link as={HashLink} to="/home#features">Features</Nav.Link>
            <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
            <Nav.Link as={HashLink} to="/home#feedback">Feedback</Nav.Link>
            <Nav.Link as={HashLink} to="/home#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="right-btn">
          <Button variant="outline-primary">Request A Demo</Button>{' '}
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;