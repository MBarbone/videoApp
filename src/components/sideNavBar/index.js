import React from "react";
import "./style.css";

function SideNavBar() {
  return (
    <div>
      <i className="fas fa-play fa-5x" />
      <div className="sidenav">
        <a href="#home">
          <i className="fas fa-home" />
        </a>
        <a href="#search">
          <i className="fas fa-search" />
        </a>
        <a href="#notifications">
          <i className="fas fa-bell" />
        </a>
        <a href="#settings">
          <i className="fas fa-cog" />
        </a>
      </div>
    </div>
  );
}

export default SideNavBar;
