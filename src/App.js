import React from "react";
require("dotenv").config();
import "./App.css";
import Div from "./components/NavBar/index";
import Hero from "./components/Hero/index";
import Slider from "./components/Slider/index";

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
