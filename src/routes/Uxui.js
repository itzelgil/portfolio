import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Row, Image, Col } from "react-bootstrap";
import logo from "./logo.png";
import illustration from "./illustrationgreen.png";
import mockup from "./wawanimal-mockup.jpg";

export default function About() {
  return (
    <div>
      <Navbar bg="dark" expand="md" variant="dark" className="navbar-uxui">
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

      <Row className="justify-content-center">
        <h2 className="uxui-title">UX/UI </h2>

        {/* <h2 className="uxui-title">THIS PAGE IS UNDER CONSTRUCTION</h2>
        <h4 className="text-center">We're working on it!</h4> */}
      </Row>
      <Row className="justify-content-center wawanimal">
        <Col className="my-auto">
          <Image className="mockup-app d-block mx-auto w-30" src={mockup} />
        </Col>
        <Col>
          <h3>Wawanimal App project</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pulvinar odio ipsum, et malesuada erat tincidunt vel. Maecenas
            lobortis, ante id molestie bibendum, quam ligula eleifend felis, ac
            molestie nibh massa maximus lacus. Vivamus urna ex, pellentesque et
            fermentum non, facilisis sed tortor. Ut semper ipsum vitae eros
            feugiat consectetur. In luctus, mi at euismod sollicitudin, nisl
            erat vehicula risus, quis semper lectus sem eget felis. Quisque non
            dolor semper, volutpat massa id, malesuada libero. Curabitur auctor
            imperdiet sem molestie tempus. Nunc congue venenatis lectus, in
            malesuada lorem vestibulum eget. Suspendisse finibus et tortor a
            luctus. Nulla facilisi. Nam in mauris in ligula tristique fermentum.
            Morbi sed dictum nibh. Nam eu ante sapien. In elit nisi, pharetra in
            molestie sit amet, elementum non purus. Etiam in elementum turpis,
            vitae cursus lectus.
          </p>
        </Col>
      </Row>
      {/* <div className="illust-wrapper">
        <Image
          className="App-profile d-block mx-auto img-fluid w-50"
          src={illustration}
        />
      </div> */}
    </div>
  );
}
