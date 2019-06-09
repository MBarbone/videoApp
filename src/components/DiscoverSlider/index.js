import React from "react";
import API from "../../utils/MovieDiscoverAPI";
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

class DiscoverMovieSlider extends React.Component {
  state = {
    posters: []
  };

  componentDidMount() {
    this.discoverMovies();
  }

  discoverMovies = query => {
    API.discoverMovies().then(
      ({ data }) => {
        const posters = data.results;
        console.log("POSTERS", posters);
        this.setState({ posters });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  };

  render() {
    return (
      <div>
        <h3 className="section-title">Discover Movies</h3>
        <div className="slider-item-container">
          <ul>
            {this.state.posters.map(poster => {
              return (
                <li className="item" key={poster.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w400${
                      poster.backdrop_path
                    }`}
                    alt={`${poster.title} Poster`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default DiscoverMovieSlider;
