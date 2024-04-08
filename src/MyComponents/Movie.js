import React from "react";

export default function Movie({ movie, onDelete }) {
  let closeBtn = {
    fontSize: "2rem",
  };

  return (
    <>
      <div className="row" key={movie.id}>
        <div className="col-md-10">
          <h4>{movie.title}</h4>
          {/* <p>{movie.desc}</p> */}
        </div>
        <div className="col-md-2">
          <button style={closeBtn} className="btn btn-danger close" aria-label="Close" onClick={() => onDelete(movie)}>
            <span aria-hidden="true">&times;</span>
          </button>
          {/* Add drop-down here */}
        </div>
      </div>
    </>
  );
}
