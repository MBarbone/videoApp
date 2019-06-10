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
        <div className="row">
          <div className="row__inner">
            {this.state.posters.map(poster => {
              return (
                <div class="tile">
                  <div className="tile" key={poster.id}>
                    <div className="tile__media">
                      <img
                        src={`https://image.tmdb.org/t/p/w400${
                          poster.backdrop_path
                        }`}
                        alt={`${poster.title} Poster`}
                      />
                    </div>
                    <div className="tile__details">
                      <i className="far fa-thumbs-up pic" />
                      <div className="tile__title">
                        <a href="play">
                          <p id="tile-movie-title">{poster.title}</p>
                        </a>
                        <a id="add-favorite" href="#favorite">
                          <i className="far fa-thumbs-up" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverMovieSlider;
