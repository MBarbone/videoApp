import React from "react";
import "./App.css";
import SideNavBar from "./components/sideNavBar/index";
import Hero from "./components/hero/index";
import FilmRoll from "./components/filmRoll";

function App() {
  return (
    <div className="App">
      <SideNavBar />
      <Hero />
      <FilmRoll />
    </div>
  );
}

export default App;
