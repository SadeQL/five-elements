import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="./five-elements-logo.png"
            width="70"
            height="70"
            className="d-inline-block align-center"
          />{" "}
          CINQ ÉLÉMENTS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#bazi">Bazi</Nav.Link>
            <Nav.Link href="#readings">Readings</Nav.Link>
            <Nav.Link href="#bookings">Bookings</Nav.Link>

            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                About cinq éléments
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Behind cinq éléments
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
