import React, { useEffect } from "react";
import Landing from "./landing/Landing";
import style from "./landing/landing.module.scss";

import { CSSTransitionGroup } from "react-transition-group"; // ES6
import Navbar from "./navbar/Navbar";
import About from "./about/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
    </div>
  );
};

export default App;
