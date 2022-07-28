import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import { Row, Image } from "react-bootstrap";
import illustration2 from "./illustrationyellow.png";

export default function About() {
  return (
    <div>
      <Navbar bg="dark" expand="md" variant="dark" className="navbar-cv">
        <Navbar.Brand href="/">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Nav className="justify-content-end" style={{ width: "100%" }}></Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/coding">Coding</NavDropdown.Item>
              <NavDropdown.Item href="/photo">Photography</NavDropdown.Item>
              <NavDropdown.Item href="/uxui">UX/UI</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/cv">CV</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="justify-content-center">
        {/* <h2 className="cv-title">CV</h2> */}

        <h2 className="cv-title">THIS PAGE IS UNDER CONSTRUCTION</h2>
        <h4 className="text-center">We're working on it!</h4>
      </Row>
      <div className="illust-wrapper">
        <Image
          className="App-profile d-block mx-auto img-fluid w-50"
          src={illustration2}
        />
      </div>
    </div>
  );
}
