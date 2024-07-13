import React from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.png';

console.log(logo);
function TopBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Maungawhau Institute of Studies Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          MIS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Academic Information" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/courseprogram">Course Programs</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Tuition Fee</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
             <Nav.Link href="/">Sign In</Nav.Link>
            <Nav.Link href="#" disabled>
              Sign Up
            </Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Roy Lee Flores</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
