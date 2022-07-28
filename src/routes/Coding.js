import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ListGroup, Button } from "react-bootstrap";
import travelpage from "./projects/travel-page.png";
import weatherapp from "./projects/weather-app.png";
import portfolio from "./projects/portfolio.png";
import reactweatherapp from "./projects/reactWeather-app.png";
import dictionary from "./projects/dictionary-app.png";

export default function Coding() {
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
              <NavDropdown.Item href="/uxui">UX/UI</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/cv">CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="justify-content-center">
        <h2 className="contact-title">CODING PROJECTS</h2>
      </Row>
      <Container fluid className="card-container">
        <Row className="card-container">
          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={travelpage} className="projectimg" />
            <Card.Body>
              <Card.Title className="cardName">TRAVEL PAGE</Card.Title>
              <hr />
              <Card.Text className="project-description">
                Landing page project about travelling.
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="languages">
                  HTML ∘ CSS
                </ListGroup.Item>
              </ListGroup>
              <br />
              <Card.Body>
                <Button
                  variant="outline-primary"
                  href="https://www.shecodes.io/workshops/shecodes-basics-53a741be-89cb-4f51-a0e9-e0b16660943c/projects/697727"
                  target="_blank"
                  className="view-button"
                >
                  View project
                </Button>
              </Card.Body>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={weatherapp} className="projectimg" />
            <Card.Body>
              <Card.Title className="cardName">WEATHER APP</Card.Title>
              <hr />
              <Card.Text className="project-description">
                Weather app project getting the data from{" "}
                <Card.Link
                  href="https://openweathermap.org/api"
                  className="project-description"
                >
                  Open Weather API.
                  <br />
                </Card.Link>
              </Card.Text>
              <ListGroup className="list-group-flush">
                <br />
                <ListGroup.Item className="languages">
                  HTML ∘ CSS ∘ Vanilla JS
                </ListGroup.Item>
              </ListGroup>
              <br />
              <Button
                variant="outline-primary"
                href="https://glittery-malabi-c02f32.netlify.app/"
                target="_blank"
                className="view-button"
              >
                View project
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={portfolio} className="projectimg" />
            <Card.Body>
              <Card.Title className="cardName">PORTFOLIO</Card.Title>
              <hr />
              <Card.Text className="project-description">
                Responsive Portfolio Project.
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="languages">
                  HTML ∘ CSS ∘ Bootstrap ∘ SAAS ∘ SEO
                </ListGroup.Item>
              </ListGroup>
              <br />
              <Button
                variant="outline-primary"
                href="https://ubiquitous-gnome-f8865b.netlify.app"
                target="_blank"
                className="view-button"
              >
                View project
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={reactweatherapp} />
            <Card.Body>
              <Card.Title className="cardName">REACT WEATHER APP</Card.Title>
              <hr />
              <Card.Text className="project-description">
                App recreated from the previous one but this time using React
                JS.
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="languages">
                  HTML ∘ CSS ∘ Bootstrap ∘ ReactJS ∘ SEO
                </ListGroup.Item>
              </ListGroup>
              <br />
              <Button
                variant="outline-primary"
                href="https://eclectic-cannoli-33a8da.netlify.app/"
                target="_blank"
                className="view-button"
              >
                View project
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={dictionary} />
            <Card.Body>
              <Card.Title className="cardName">DICTIONARY APP</Card.Title>
              <hr />
              <Card.Text className="project-description">
                Dictionary App made in React getting the data from{" "}
                <Card.Link
                  href="hhttps://dictionaryapi.dev/"
                  className="project-description"
                >
                  Free Dictionary API
                </Card.Link>
              </Card.Text>
              <ListGroup className="list-group-flush">
                <br />
                <ListGroup.Item className="languages">
                  HTML ∘ CSS ∘ Bootstrap ∘ ReactJS ∘ SEO
                </ListGroup.Item>
              </ListGroup>
              <br />
              <Button
                variant="outline-primary"
                href="https://tangerine-crisp-eb7f0a.netlify.app"
                target="_blank"
                className="view-button"
                size="sm"
              >
                View project
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="cardName">TRELLO APP</Card.Title>
              <hr />
              <Card.Text className="project-description">
                In progress...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <br />
                <ListGroup.Item className="languages">
                  HTML ∘ CSS ∘ Bootstrap ∘ ReactJS ∘ SEO
                </ListGroup.Item>
              </ListGroup>
              <br />
              <Button
                variant="outline-primary"
                href="#"
                target="_blank"
                className="view-button"
                size="sm"
              >
                View project
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title className="cardName">THE MOVIE DB</Card.Title>
              <hr />
              <Card.Text className="project-description">
                In progress...
              </Card.Text>
              <ListGroup className="list-group-flush">
                <br />
                <ListGroup.Item className="languages">
                  HTML ∘ CSS ∘ Bootstrap ∘ ReactJS ∘ SEO
                </ListGroup.Item>
              </ListGroup>
              <br />
              <Button
                variant="outline-primary"
                href="#"
                target="_blank"
                className="view-button"
                size="sm"
              >
                View project
              </Button>
            </Card.Body>
          </Card>
        </Row>
        <Outlet />
      </Container>
    </div>
  );
}
