import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import Hero from "./Hero.jsx";
import Project from "./Project.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
