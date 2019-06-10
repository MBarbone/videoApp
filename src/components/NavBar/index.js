import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <i className="fas fa-play fa-3x" />
        <a href="#home">Home</a>
        <a href="#search">Search</a>
        <a href="#favorites">Favorites</a>
        <a href="#settings">Settings</a>
        <a id="signOut" href="#signOut">
          Sign Out
        </a>
      </div>
    </div>
  );
}

export default Navbar;
