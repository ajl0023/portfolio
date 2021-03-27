import React, { useEffect } from "react";
import Landing from "./landing/Landing";

import { CSSTransitionGroup } from "react-transition-group"; // ES6
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import style from "./app.module.scss";
import "./app.css";
const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
};

export default App;
