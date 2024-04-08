import React from "react";

export default function Movie({ movie, onDelete }) {
  let closeBtn = {
    fontSize: "3rem",
    color: "red",
    lineHeight: "25%",
    cursor: "pointer",
    verticalAlign: "middle"
  };

  return (
    <>
      <div className="row" key={movie.id}>
        <div className="col-md-10">
          <h4>{movie.title}</h4>
          {/* <p>{movie.desc}</p> */}
        </div>
        <div className="col-md-2">
          <span title="Delete this movie" style={closeBtn} onClick={() => onDelete(movie)}>&times;</span>
          {/* Add drop-down here */}
        </div>
      </div>
    </>
  );
}
