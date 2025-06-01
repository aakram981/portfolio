import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import CV from "./pages/CV";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-36">
        <Router basename="/portfolio">
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Router>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
