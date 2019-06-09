import React from "react";
import "./App.css";
import Div from "./components/NavBar/index";
import Hero from "./components/Hero/index";
import DiscoverSlider from "./components/DiscoverSlider/index";
import TopRatedSlider from "./components/TopRatedSlider/index";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Div />
      <Hero />
      <DiscoverSlider />
      <TopRatedSlider />
    </div>
  );
}

export default App;
