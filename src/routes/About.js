import React from "react";
import { Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import profile from "./banner.png";
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
    <div>
      <Navbar bg="dark" expand="md" variant="dark" className="navbar">
        <Navbar.Brand href="/">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Nav className="justify-content-end" style={{ width: "100%" }}></Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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

      {/* <Row className="justify-content-center">
        <h2 className="about-title text-center">ABOUT ME</h2>
      </Row> */}

      <Row className="row about-container">
        <Col className="justify-content-center">
          <div className="image-wrapper">
            <br />
            <br />
            <Image className="d-block mx-auto w-30 App-profile" src={profile} />
          </div>
        </Col>
        <Row>
          <Col className="col-2"></Col>
          <Col className="my-auto name-container">
            {/* <h2 className="name">ITZEL GIL</h2>
          <h2 className="name-sec">FRONT-END DEVELOPER</h2>
          <h2 className="name-sec">UX/UI DESIGNER</h2>
          <br /> */}
            <br />
            <p className="about-me-text">
              Passionate about design and technology. After years of study and
              different professional decisions, I found a way to unify my two
              passions with the development of attractive, interactive and
              innovative applications and websites.
              <br />
              <br />I started my professional life in an area that I didn't
              really enjoy, so I decided to start a new adventure in the world
              of programming as a Front-end Developer. After some time wanting
              to explore my creativity through digital environments, I decided
              to start training as a UX designer as well, and I gained a set of
              professional knowledge and skills useful for generating
              high-impact projects.
              <br />
              <br />
              My goal is to remain on the cutting-edge of advancements. I like
              to take time to acquire new knowledge. Learn about new tools, and
              challenges motivate me.
            </p>
          </Col>
          <Col className="col-2"></Col>
        </Row>

        <Row className="about-me">
          {/* <Col className="my-auto"></Col> */}
          <Col className="my-auto">
            <br />
            <h3 className="skills-header text-center">SKILLS</h3>
            <br />
            <div className="icons">
              <SiHtml5 className="html icon" size={30} title="HTML" />
              <DiCss3 className="css icon" size={35} title="CSS" />
              <IoLogoJavascript
                className="js icon"
                size={35}
                title="JavaScript"
              />
              <BsFillBootstrapFill
                className="bs icon"
                size={30}
                title="Bootstrap"
              />
              <FiFigma className="figma icon" size={30} title="Figma" />
              <AiFillGithub className="github icon" size={35} title="Github" />
              <SiAdobexd className="adobexd icon" size={30} title="AdobeXD" />
            </div>
          </Col>
        </Row>
      </Row>
      <Row>
        <h3 className="phrase">Let's work together!</h3>
      </Row>
      <Row>
        {/* <h3 className="skills-header text-center">SKILLS</h3>
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
        </div> */}
      </Row>
      <Outlet />
    </div>
  );
}
