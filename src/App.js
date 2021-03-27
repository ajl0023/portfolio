import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./about/About";
import "./App.css";
import Landing from "./landing/Landing";
import Navbar from "./navbar/Navbar";
const App = () => {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <Landing />
        <About />
      </Router>
    </div>
  );
};

export default App;
