import React from "react";
import "./App.css";
import Div from "./components/NavBar/index";
import Hero from "./components/Hero/index";
import Slider from "./components/Slider/index";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Div />
      <Hero />
      <Slider />
      <Slider />
    </div>
  );
}

export default App;
