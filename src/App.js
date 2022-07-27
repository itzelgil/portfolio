import "./App.css";
import Row from "react-bootstrap/Row";
import { Outlet, Link } from "react-router-dom";
import Typewriter from "react-simple-typewriter";

function App() {
  return (
    <div className="App">
      <Row className="row">
        <h1>("Hello, world!");</h1>
      </Row>
      <Row className="row">
        <p className="name-ocupation">I'm Itzel Gil 👋🏽 </p>
      </Row>
      <Row className="row">
        <span className="name-ocupation">
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={["Front-end Developer", "UX/UI Designer", "Photographer"]}
          />
        </span>
        {/* <p className="name-ocupation">Front-end Developer</p> */}
      </Row>

      <Row className="row">
        <Link to="/about" className="enter-button">
          ENTER
        </Link>
      </Row>
      <Outlet />
    </div>
  );
}

export default App;
