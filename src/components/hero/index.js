import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="container hero-container">
      <div className="row">
        <div className="col-1" />
        <div className="col-10">
          <div className="hero text-center">
            <h1>Hey This is a feature</h1>
          </div>
        </div>
        <div className="col-1" />
      </div>
    </div>
  );
}

export default Hero;
