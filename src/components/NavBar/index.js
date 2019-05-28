import React from "react";
import "./style.css";

function NavBar() {
  return (
    <div className="nav-container">
      <i className="fas fa-play fa-4x" />
      <div className="sidenav">
        <a href="#home">Home</a>
        <a href="#search">Search</a>
        <a href="#notifications">Your Favorites</a>
        <a href="#settings">Settings</a>
        <a href="#signOut">Sign Out</a>
      </div>
    </div>
  );
}

export default NavBar;
