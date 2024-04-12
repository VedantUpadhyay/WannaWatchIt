import React, { useState } from "react";

export default function Movie({ movie, onDelete, onCheck }) {
  const [isChecked, setIsChecked] = useState(false);

  let closeBtn = {
    fontSize: "3rem",
    color: "red",
    lineHeight: "25%",
    cursor: "pointer",
    verticalAlign: "middle",
    userSelect: "none",
    outline: "none"
  };

  let textStyle = {
    textDecoration: isChecked ? "line-through" : "none"
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
    onCheck(movie, isChecked);
  };

  return (
    <>
      <div className="row" key={movie.id}>
        <div className="col-md-1">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheck}
          />
        </div>
        <div className="col-md-9" style={textStyle}>
          <h4>{movie.title}</h4>
          {/* <p>{movie.desc}</p> */}
        </div>
        <div className="col-md-2">
          <span
            title="Delete this movie"
            style={closeBtn}
            onClick={() => onDelete(movie)}
          >
            &times;
          </span>
          {/* Add drop-down here */}
        </div>
      </div>
    </>
  );
}
