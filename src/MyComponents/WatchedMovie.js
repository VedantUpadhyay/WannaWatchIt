import React, { useState } from "react";

export default function WatchedMovie({ movie, onDelete, onCheck }) {
  const [isChecked, setIsChecked] = useState(true);

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
        </div>
      </div>
    </>
  );
}
