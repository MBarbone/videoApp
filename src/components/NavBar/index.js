import React from "react";
import "./style.css";

class Div extends React.Component {
  state = {
    background: "transparent"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 1) {
      this.setState({ background: "black" });
    } else {
      this.setState({ background: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <div className="nav" style={{ background: this.state.background }}>
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
}

export default Div;
