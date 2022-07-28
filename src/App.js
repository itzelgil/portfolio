import "./App.css";
import Row from "react-bootstrap/Row";
import { Outlet, Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

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
            options={{
              strings: [
                "Jr Front-end Developer",
                "UX/UI Designer",
                "Photographer",
              ],
              autoStart: true,
              loop: true,
              speed: "50",
              delay: "70",
            }}
          />
        </span>
      </Row>
      <br />
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
