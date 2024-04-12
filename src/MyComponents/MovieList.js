import React, { useState } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

export default function MovieList(props) {

  let textUnderline = {
    textDecoration: "underline",
  };


  return (
    <div className="container my-3">
      <h2 style={textUnderline}>Watch List</h2>
      <ul className="list-group">
        {props.movieList && props.movieList.length > 0 ? (
          props.movieList.map((movie) => {
            return (
              <li className="list-group-item" key={movie.id}>
                <Movie movie={movie} onDelete={props.onDelete} onCheck={props.onCheck} />
              </li>
            );
          })
        ) : (
          <>
            <h5>
              Add MOVIE NOW!{" "}
              <span role="img" description="smiley ecnouragement" aria-label="">
                😄
              </span>
            </h5>
          </>
        )}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  movieList: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};
