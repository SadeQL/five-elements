import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo-beige.png";

const Navigation = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center">
          <Navbar.Brand>
            <img alt="logo" src={Logo} width="200" height="200" />
          </Navbar.Brand>
        </div>
        <div className="d-flex justify-content-center">
          <h1
            style={{
              fontFamily: "EBGaramond",
              fontWeight: "bold",
              color: "#DB7846",
            }}
          >
            cinq éléments
          </h1>
        </div>

        <div className="d-flex justify-content-center">
          <Navbar expand="lg">
            <Container id="navBarContainer">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    href="/"
                    style={{
                      fontFamily: "EBGaramond",
                      color: "#DB7846",
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/bazi"
                    style={{
                      fontFamily: "EBGaramond",
                      color: "#DB7846",
                    }}
                  >
                    BaZi
                  </Nav.Link>
                  <Nav.Link
                    href="/readings"
                    style={{
                      fontFamily: "EBGaramond",
                      color: "#DB7846",
                    }}
                  >
                    Readings(Energies)
                  </Nav.Link>
                  <Nav.Link
                    href="/booking"
                    style={{
                      fontFamily: "EBGaramond",
                      color: "#DB7846",
                    }}
                  >
                    Booking
                  </Nav.Link>
                  <Nav.Link
                    href="/about"
                    style={{
                      fontFamily: "EBGaramond",
                      color: "#DB7846",
                    }}
                  >
                    About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Navigation;
