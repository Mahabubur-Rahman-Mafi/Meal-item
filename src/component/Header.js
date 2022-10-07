import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
              <Navbar.Brand href="/home" className='icon-info'>
                <h1>Food</h1>
              </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header-info" >
            <Link to='/home' className='me-3'>Home</Link>
            <Link to='/meals' className='me-3'>Meals</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;