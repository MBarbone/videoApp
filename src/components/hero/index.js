import React from "react";
import API from "../../utils/HeroTrailer";
import "./style.css";

class Hero extends React.Component {
  state = {
    key: ""
  };

  componentDidMount() {
    this.heroTrailer();
  }

  heroTrailer = query => {
    API.heroTrailer()
      .then(({ data }) => {
        console.log("DEBUG TRAILER", data);
        return this.setState({ key: data.results[0].key });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="hero">
        <iframe
          title="trailer"
          className="trailer"
          frameBorder="0"
          height="100%"
          width="100%"
          src={`https://www.youtube.com/embed/${
            this.state.key
          }?autoplay=1&mute=1&controls=0&modestbranding=1`}
        />
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
}

export default Hero;
