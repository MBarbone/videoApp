import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/index";
import Hero from "./components/hero/index";
import Slider from "./components/Slider/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Slider />
    </div>
  );
}

export default App;
