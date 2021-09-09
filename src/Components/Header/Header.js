import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img alt="" src={logo} width="160" height="35" className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/review">Order Review</Nav.Link>
                            <Nav.Link href="/manage">Manage Inventory</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;