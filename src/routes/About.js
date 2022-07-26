import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import profile from "./perfil.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SiHtml5, SiAdobexd } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <Container fluid>
      <Navbar bg="dark" expand="md" variant="dark" className="navbar">
        <Navbar.Brand href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Nav className="justify-content-end" style={{ width: "100%" }}></Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about"></Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Coding</NavDropdown.Item>
              <NavDropdown.Item href="/photo">Photography</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">UX/UI</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="#link">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="justify-content-center">
        <h2 className="about-title text-center">ABOUT ME</h2>
      </Row>
      <Row className="row">
        <Col className="justify-content-center">
          <br />
          <br />
          <br />
          <Image
            className="App-profile d-block mx-auto img-fluid w-50"
            src={profile}
          />

          <br />
          <br />
        </Col>
        <Col className="justify-content-center">
          <br />
          <br />
          <br />
          <p className="about-me text-center">
            <strong>Front-end Developer</strong> from México.
            <br />
            <br />
            I'm from San Luis Potosí, located in the center of México. It's a
            very colorful city full of biodiversity and the most tasty and
            delicious food. 🤤
            <br />
            <br />
            Currently based in Barcelona, Spain. After a few years of working in
            an area I didn't enjoyed, I decided to start a new journey in the IT
            world.
            <br />
            <br />
            I love to take photos of everything I see, in my free time I love to
            cook, illustrate or take a long walk with Coco (my dog) ♥️
            <br />
            <br />
            Let's work together!
          </p>
        </Col>
      </Row>
      <br />

      <Row className="skills-div justify-content-center">
        <h3 className="skills-header text-center">SKILLS</h3>
        <br />
        <br />
        <br />
        <div className="icons">
          <SiHtml5 className="html icon" size={30} title="HTML" />
          <DiCss3 className="css icon" size={35} title="CSS" />
          <IoLogoJavascript className="js icon" size={35} title="JavaScript" />
          <BsFillBootstrapFill
            className="bs icon"
            size={30}
            title="Bootstrap"
          />
          <FiFigma className="figma icon" size={30} title="Figma" />
          <AiFillGithub className="github icon" size={35} title="Github" />
          <SiAdobexd className="adobexd icon" size={30} title="AdobeXD" />
        </div>
      </Row>
      <br />
      <br />
      <br />
      <Outlet />
    </Container>
  );
}
