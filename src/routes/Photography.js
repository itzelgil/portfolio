import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";

export default function Photography() {
  return (
    <Container fluid>
      <Navbar bg="dark" expand="md" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Nav className="justify-content-end" style={{ width: "100%" }}></Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Coding</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Photography
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">UX/UI</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <h2 className="photo-title">PHOTOGRAPHY</h2>
    <br />
    <br />
    <h2 className="life">Black and white</h2>
    <Container fluid>
        
    </Container>

    </Container>
  );
}
