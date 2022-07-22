import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import laucoco from "./photography/life in black and white/lau-coco.jpg";
import gothic from "./photography/life in black and white/gothic-streets.jpg";
import iceland from "./photography/life in black and white/reykjavic-church.jpg";
import miracoli from "./photography/life in black and white/pisa-tower.jpg";
import sebas from "./photography/life in black and white/sebas-macba.jpg";
import catalunya from "./photography/life in black and white/catalunya-liure.jpg";
import abraham from "./photography/life in black and white/abraham-iceland.jpg";
import coco from "./photography/life in black and white/coco-rome.jpg";
import paris from "./photography/life in black and white/louvre.jpg";
import cocopark from "./photography/life in black and white/coco.jpg";
import eiffel from "./photography/Around the world/tour-eiffel.jpg";
import catfirenze from "./photography/Around the world/cattedrale-firenze.jpg";
import lungarno from "./photography/Around the world/lungarno.jpg";
import volterra from "./photography/Around the world/volterra.jpg";
import sunseticeland from "./photography/Around the world/iceland.jpg";
import godafoss from "./photography/Around the world/godafoss-waterfall.jpg";
import geysir from "./photography/Around the world/geysir.jpg";
import berlin from "./photography/Around the world/berlin-terrace.jpg";
import neus from "./photography/Around the world/neuschwanstein.jpg";
import pisa from "./photography/Around the world/cattedrale-pisa.jpg";
import towerBridge from "./photography/Around the world/tower-bridge.jpg";
import icelandPort from "./photography/Around the world/iceland-port.jpg";
import livorno from "./photography/Around the world/livorno.jpg";
import lungarno2 from "./photography/Around the world/lungarno2.jpg";
import godafossWaterfall from "./photography/Around the world/godafoss2.jpg";
import reykj2 from "./photography/Around the world/reykjavik.jpg";
import dettifoss from "./photography/Around the world/dettifoss.jpg";
import sena from "./photography/Around the world/sena-river-view.jpg";

export default function Photography() {
  return (
    <Container fluid>
      <Navbar bg="dark" expand="md" variant="dark" className="navbarPhoto">
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
                <NavDropdown.Item href="/photo">Photography</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">UX/UI</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="#link">CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h2 className="photo-title">PHOTOGRAPHY</h2>
      <br />
      <br />
      <h2 className="life">Black and white</h2>
      <Container fluid className="grid-container cont">
        <div className="image">
          <img src={laucoco} className="img-fluid" alt="lau-coco" />
          <p className="description">Lau and Coco at our balcony</p>
        </div>

        <div className="image">
          <img src={gothic} className="img-fluid" alt="gothic" />
          <p className="description">Gothic quarter, Barcelona.</p>
        </div>

        <div className="image">
          <img src={iceland} className="img-fluid" alt="iceland" />
          <p className="description">Hallgrímskirkja, Reykjavík Iceland.</p>
        </div>

        <div className="image">
          <img src={miracoli} className="img-fluid" alt="pisa" />
          <p className="description">Piazza dei Miracoli, Pisa, Italy.</p>
        </div>

        <div className="image">
          <img src={sebas} className="img-fluid" alt="macba" />
          <p className="description">Sebas at MACBA Museum in Barcelona.</p>
        </div>

        <div className="image">
          <img src={catalunya} className="img-fluid" alt="catalunya" />
          <p className="description">Catalunya manifestation.</p>
        </div>

        <div className="image">
          <img src={abraham} className="img-fluid" alt="iceland" />
          <p className="description">
            Abraham on the rocks, at a black sand beach in Iceland.
          </p>
        </div>

        <div className="image">
          <img src={coco} className="img-fluid" alt="coco" />
          <p className="description">Coco in Rome.</p>
        </div>

        <div className="image">
          <img src={paris} className="img-fluid" alt="louvre" />
          <p className="description">
            Psyche Revived by Cupid's Kiss at Louvre Museum, Paris, France.
          </p>
        </div>
        <img src={cocopark} className="img-fluid" alt="coco at the park" />
        <p className="description">Coco at the park.</p>
      </Container>
      <br />
      <br />
      <h2 className="life">Around the world</h2>
      <Container fluid className="grid-container cont">
        <div className="image">
          <img src={eiffel} className="img-fluid" alt="eiffel tower" />
          <p className="description">
            Eiffel tower from below. Paris, France. July, 2017.
          </p>
        </div>

        <div className="image">
          <img src={catfirenze} className="img-fluid" alt="firenze" />
          <p className="description">
            Cattedrale di Santa Maria del Fiore, Firenze, Italy. Dec, 2017
          </p>
        </div>

        <div className="image">
          <img src={lungarno} className="img-fluid" alt="pisa" />
          <p className="description">Lungarno, Pisa, Italy.</p>
        </div>

        <div className="image">
          <img src={volterra} className="img-fluid" alt="volterra" />
          <p className="description">Volterra, Italy Dec, 2017</p>
        </div>

        <div className="image">
          <img src={sunseticeland} className="img-fluid" alt="sunset" />
          <p className="description">
            Sunset in Iceland at 10:00 P.M. July, 2017
          </p>
        </div>

        <div className="image">
          <img src={godafoss} className="img-fluid" alt="godafoss" />
          <p className="description">
            Goðafoss waterfall in Iceland. July 2017.
          </p>
        </div>

        <div className="image">
          <img src={geysir} className="img-fluid" alt="geysir" />
          <p className="description">Geysir, Iceland. July 2017</p>
        </div>

        <div className="image">
          <img src={berlin} className="img-fluid" alt="berlin" />
          <p className="description">Berlin from the rooftop. Dec, 2017</p>
        </div>

        <div className="image">
          <img src={neus} className="img-fluid" alt="neus" />
          <p className="description">
            Postcard from Neuschwanstein Castle, Germany. July 2017
          </p>
        </div>

        <div className="image">
          <img src={pisa} className="img-fluid" alt="italy" />
          <p className="description">
            Cattedrale Metropolitana Primaziale di Santa Maria Assunta, Pisa,
            Italy Dec, 2017
          </p>
        </div>

        <div className="image">
          <img src={towerBridge} className="img-fluid" alt="towerbridge" />
          <p className="description">
            A walk trough Tower Bridge in London, UK. July, 2017.
          </p>
        </div>

        <div className="image">
          <img src={icelandPort} className="img-fluid" alt="port" />
          <p className="description">
            Port full of colors in Iceland. July 2017.
          </p>
        </div>

        <div className="image">
          <img src={livorno} className="img-fluid" alt="livorno" />
          <p className="description">Livorno, Italy Dec, 2018</p>
        </div>

        <div className="image">
          <img src={lungarno2} className="img-fluid" alt="lungarno" />
          <p className="description">Lungarno, Pisa, Italy.</p>
        </div>

        <div className="image">
          <img src={godafossWaterfall} className="img-fluid" alt="godafoss" />
          <p className="description">
            Tomasz at Goðafoss waterfall in Iceland. July 2017.
          </p>
        </div>

        <div className="image">
          <img src={reykj2} className="img-fluid" alt="reykjavic" />
          <p>Colorful Reykjavík, Iceland. July 2017.</p>
        </div>

        <div className="image">
          <img src={sena} className="img-fluid" alt="eiffel" />
          <p className="description">
            Eiffel tower from a boat trough the Sena river. Paris, France. July,
            2017
          </p>
        </div>

        <div className="image">
          <img src={dettifoss} className="img-fluid" alt="dettifoss" />
          <p className="description">
            Double rainbow in the most powerful waterfall of Europe, Dettifoss,
            Iceland. July 2017
          </p>
        </div>
      </Container>
    </Container>
  );
}
