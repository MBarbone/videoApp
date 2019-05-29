import React from "./node_modules/react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-btn-container">
        <h4>Watch Now!</h4>
        <button className="btn btn-secondary hero-btn">
          <i className="fas fa-info-circle" />
          More Info
        </button>
        <button className="btn btn-secondary hero-btn">
          <i className="fas fa-plus" />
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default Hero;
