import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import CV from "./pages/CV";

function App() {
  return (
    <Router basename="/portfolio">
      <Navbar />
      <div className="pt-36">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
