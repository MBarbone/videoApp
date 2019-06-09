import React from "react";
import API from "../../utils/TopRated-API";
import "./style.css";

// function Slider() {
//   return (
//     <div>
//       <h3 className="section-title">Title of Section</h3>
//       <div className="slider-item-container">
//         <div className="item">1</div>
//         <div className="item">2</div>
//         <div className="item">3</div>
//         <div className="item">4</div>
//         <div className="item">5</div>
//       </div>
//     </div>
//   );
// }

// export default Slider;

class Slider extends React.Component {
  state = {
    result: [],
    poster: ""
  };

  componentDidMount() {
    this.topRatedMovies();
  }

  topRatedMovies = query => {
    API.topRatedMovies()
      .then(({ data }) => {
        console.log("[DEBUG movies API", data);
        console.log(
          "[DEBUG] img path",
          `https://image.tmdb.org/t/p/w400${data.results[0].backdrop_path}`
        );
        return this.setState({ backdrop: data.results[0].backdrop_path });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h3 className="section-title">Top Rated Movies</h3>
        <div className="slider-item-container">
          <img
            src={`https://image.tmdb.org/t/p/w400${this.state.backdrop}`}
            className="item"
            alt="Movie Poster"
          />
        </div>
      </div>
    );
  }
}

export default Slider;
