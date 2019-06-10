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

class TopRatedSlider extends React.Component {
  state = {
    posters: []
  };

  componentDidMount() {
    this.topRatedMovies();
  }

  topRatedMovies = query => {
    API.topRatedMovies().then(
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
        <div className="row">
          <h3 className="section-title">Top Rated Movies</h3>
          <div className="row__inner">
            {this.state.posters.map(poster => {
              return (
                <div className="tile">
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
                      <a href="play">
                        <i className="far fa-play-circle play-btn" />
                      </a>
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

export default TopRatedSlider;
