import React from "react";
import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";

const WatchedMovies = (props) => {
  console.log("props ", props);
  return (
    <div className="container my-3">
      <div className="accordion accordion-flush watched-movies-acc" id="watchedMoviesAcc">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Watched Movies
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#watchedMoviesAcc">
            <div className="accordion-body">
              <ul className="list-group">
                {props.watchedMovies && props.watchedMovies.length > 0 ? (
                  props.watchedMovies.map((movie) => {
                    return (
                      <li className="list-group-item" key={movie.id}>
                        <WatchedMovie movie={movie} onDelete={props.onDelete} onCheck={props.onCheck} />
                      </li>
                    );
                  })
                ) : (
                  <>
                    Blank
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WatchedMovies.propTypes = {
  watchedMovies: PropTypes.array.isRequired,
};

export default WatchedMovies;
