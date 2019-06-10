import React from "react";
import "./App.css";
import Div from "./components/NavBar/index";
import Hero from "./components/Hero/index";
import DiscoverSlider from "./components/DiscoverSlider/index";
import TopRatedSlider from "./components/TopRatedSlider/index";
import HitTVSlider from "./components/HitTVShows/index";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Div />
      <Hero />
      <DiscoverSlider />
      <TopRatedSlider />
      <HitTVSlider />
    </div>
  );
}

export default App;
