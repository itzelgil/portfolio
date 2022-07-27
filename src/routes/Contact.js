import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Photography() {
  return (
    <div>
      <Navbar bg="dark" expand="md" variant="dark" className="navbarContact">
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
              <NavDropdown.Item href="#action/3.3">UX/UI</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="#link">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="justify-content-center">
        <h2 className="contact-title">LET'S GET IN TOUCH!</h2>
      </Row>
      <br />
      <br />
      <br />
      <Row clasName="justify-content-center">
        <h3 className="title">Email</h3>
      </Row>

      <Row className="justify-content-center email">
        <a href="mailto:itzel6276@gmail.com" title="email-page">
          itzel6276@gmail.com
        </a>
      </Row>
      <br />
      <br />

      <Row className="row justify-content-center">
        <h3 className="title">Social Profiles</h3>
      </Row>
      <Row className="d-flex justify-content-center social">
        <div className="social">
          <a
            href="https://www.instagram.com/itzelgil/"
            className="instagram"
            target="_blank"
            title="insta-icon"
            rel="noreferrer"
          >
            <AiOutlineInstagram className="ig contact-icon" />
          </a>
          <a
            href="https://github.com/itzelgil"
            className="github"
            target="_blank"
            title="github-icon"
            rel="noreferrer"
          >
            <AiFillGithub className="github contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/itzelgile/"
            className="linkedin"
            title="linkedin-icon"
            rel="noreferrer"
          >
            <AiFillLinkedin className="linkedin contact-icon" />
          </a>
        </div>
      </Row>
      <small className="signature">
        <a
          href="https://github.com/itzelgil/portfolio-test"
          alt="github-repo"
          title="github-repo"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
      </small>
      <Outlet />
    </div>
  );
}
