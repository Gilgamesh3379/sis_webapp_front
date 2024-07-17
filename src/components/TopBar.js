// TopBar.js
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const TopBar = ({ user, onLogout }) => {
    return (
        <Navbar bg="primary" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
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
                            <NavDropdown.Item href="/courseprograms">Course Programs</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Tuition Fee</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">------------------</NavDropdown.Item>
                        </NavDropdown>
                        {!user && <Nav.Link href="/register">Register</Nav.Link>}
                        {!user && <Nav.Link href="/login">Log In</Nav.Link>}
                    </Nav>
                    {user ? (
                        <>
                            <Navbar.Text>
                                Signed in as: <a href="/profile">{user.username}</a>
                            </Navbar.Text>
                            <Nav.Link href="#" onClick={onLogout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <Navbar.Text>
                            Signed in as: <a href="/login">Guest</a>
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopBar;
