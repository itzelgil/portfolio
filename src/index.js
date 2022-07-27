import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Photography from "./routes/Photography";
import Contact from "./routes/Contact";
import Coding from "./routes/Coding";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="photo" element={<Photography />} />
      <Route path="contact" element={<Contact />} />
      <Route path="coding" element={<Coding />} />
    </Routes>
  </BrowserRouter>
);
