import React, { useState } from 'react';

export default function AddMovie(props) {

  const [movieTitle, setMovieTitle] = useState("");
  //const [movieDesc, setMovieDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!movieTitle) {
      alert("Movie title is mandatory!");
      return;
    }

    props.addMovie(movieTitle);
    setMovieTitle(""); 
  };

  const handleMovieTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  // const handleMovieDescChange = (e) => {
  //   setMovieDesc(e.target.value);
  // };

  return (
    <>
      <div className="container my-3">
        <h3>Add Movie</h3>
        <form onSubmit={submit}>
          <div className="">
            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg" onClick={submit}> + </span>
              <input type="text" className="form-control" onChange={handleMovieTitleChange} id="movie-title"
                value={movieTitle} aria-describedby="inputGroup-sizing-lg" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

AddMovie.propTypes = {

};
