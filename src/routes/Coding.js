import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Coding() {
  return (
    <Container fluid>
      <Navbar bg="dark" expand="md" variant="dark" className="navbarContact">
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
                <NavDropdown.Item href="/coding">Coding</NavDropdown.Item>
                <NavDropdown.Item href="/photo">Photography</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">UX/UI</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="#link">CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="justify-content-center">
        <h2 className="contact-title">CODING PROJECTS</h2>
      </Row>
      <Row className="cards-row">
        <h3>HTML, CSS and JS projects</h3>
      </Row>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
            <Card.Title>Travel Page</Card.Title>
            <Card.Text>
              First project using HTML and CSS. It's a travel page with info
              about some places.
            </Card.Text>
            <Card.Body>
              <Card.Link href="https://www.shecodes.io/workshops/shecodes-basics-53a741be-89cb-4f51-a0e9-e0b16660943c/projects/697727">
                Go to this project
              </Card.Link>
            </Card.Body>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
            <Card.Title>Weather app</Card.Title>
            <Card.Text>
              Project of a weathear app in HTML, CSS and JS. Getting the
              information from{" "}
              <Card.Link href="https://openweathermap.org/api">
                Open Weather API
              </Card.Link>
            </Card.Text>
            <Card.Body>
              <Card.Link href="https://www.shecodes.io/workshops/shecodes-plus-2dc4f6a4-dbe1-4639-8720-7369fa6c5a23/projects/777829">
                Go to this project
              </Card.Link>
            </Card.Body>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
            <Card.Text>Responsive portfolio made in Bootstrap.</Card.Text>
            <Card.Body>
              <Card.Link href="https://www.shecodes.io/workshops/shecodes-responsive-bf72c954-148d-4fc2-bbfc-de7488b154d8/projects/804187">
                Go to this project
              </Card.Link>
            </Card.Body>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="#" />
          <Card.Body>
            <Card.Title>Travel Page</Card.Title>
            <Card.Text>
              First project using HTML and CSS. It's a travel page with info
              about some places.
            </Card.Text>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card.Body>
        </Card>
      </Row>
      <Row className="cards-row">
        <h3>React projects</h3>
      </Row>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Dictionary App</Card.Title>
            <Card.Text>
              Dictionary App made in React getting info from{" "}
              <Card.Link href="hhttps://dictionaryapi.dev/">
                Free Dictionary API
              </Card.Link>
            </Card.Text>
            <Card.Body>
              <Card.Link href="https://www.shecodes.io/workshops/shecodes-react-0790d9a1-6427-41f1-bc8f-02029fed8044/projects/925688">
                Go to this project
              </Card.Link>
            </Card.Body>
          </Card.Body>
        </Card>
      </Row>
      <Outlet />
    </Container>
  );
}
