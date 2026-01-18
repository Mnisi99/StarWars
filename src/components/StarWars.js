import React from "react";
import { Link } from "react-router-dom";

class StarWars extends React.Component {
  render() {

    const posterUrl = `https://image.tmdb.org/t/p/w500${this.props.results.poster_path}`
    const movieUrl = `/movie/${this.props.results.id}`;

    return (
      <>
        {
          this.props.results.poster_path &&
            <div className="col-lg-3 col-md-3 col-2 my-4">
              <div className="card">
                <img src={posterUrl} className="card-img-top" alt={this.props.results.original_title} />
                <div className="card-body">
                  <h5 className="card-title">{this.props.results.original_title}</h5>
                  <p className="card-text">
                    {this.props.results.title}
                  </p>
                  <Link to={movieUrl} className="btn btn-primary">
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
        }
      </>
    );
  }
}

export default StarWars;
