import React, {useState} from 'react';

export default function AddMovie(props) {

    const [movieTitle, setMovieTitle] = useState("");
    const [movieDesc, setMovieDesc] = useState("");

    const submit = () => {
        if(!movieTitle || !movieDesc) {
            alert("Both title and description are mandatory!");
        }

        props.addMovie(movieTitle, movieDesc);
    };

    const handleMovieTitleChange = (e) => {
      setMovieTitle(e.target.value);
    };

    const handleMovieDescChange = (e) => {
      setMovieDesc(e.target.value);
    };

  return (
    <>
      <div className="container my-3">
        <h3>Add Movie</h3>
        <form>
          <div className="mb-3 w-25">
            <label htmlFor="movie-title" className="form-label">
              Title
            </label>
            <input
              onChange={handleMovieTitleChange}
              type="text"
              className="form-control"
              id="movie-title"
              value = {movieTitle}
            />
          </div>
          <div className="mb-3 w-25">
            <label htmlFor="movie-description" className="form-label">
              Description
            </label>
            <input
              onChange={ handleMovieDescChange}
              type="text"
              className="form-control"
              id="movie-description"
              value={movieDesc}
            />
          </div>
          <button onClick={submit} type="button" className="btn btn-sm btn-success">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

AddMovie.propTypes = {

};
