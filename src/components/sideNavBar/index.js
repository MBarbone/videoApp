import React from "react";
import "./style.css";

function SideNavBar() {
  return (
    <div className="sidenav-container">
      <i className="fas fa-play fa-4x" />
      <div className="sidenav">
        <a href="#home">
          <i className="fas fa-home fa-sm" />
        </a>
        <a href="#search">
          <i className="fas fa-search fa-sm" />
        </a>
        <a href="#notifications">
          <i className="fas fa-bell fa-sm" />
        </a>
        <a href="#settings">
          <i className="fas fa-cog fa-sm" />
        </a>
        <a href="#signOut">
          <i className="fas fa-sign-out-alt fa-sm" />
        </a>
      </div>
    </div>
  );
}

export default SideNavBar;
