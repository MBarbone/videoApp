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

class Slider extends React.Component {
  state = {
    result: [],
    poster: ""
  };

  componentDidMount() {
    this.discoverMovies();
  }

  discoverMovies = query => {
    API.discoverMovies()
      .then(data => this.setState({ title: data.data.results[0].title }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h3 className="section-title">Title of Section</h3>
        <div className="slider-item-container">
          <div className="item">{this.state.title}</div>
        </div>
      </div>
    );
  }
}

export default Slider;
