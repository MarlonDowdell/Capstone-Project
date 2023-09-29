// src/components/NavBar.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My E-commerce App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
