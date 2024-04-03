import React from 'react'

export default function Movie({movie, onDelete}) {
  return (
    <>
      <div key={movie.id}>
        <h4>
          {movie.title}
        </h4>
        <p>{movie.desc}</p>
        <button className="btn btn-danger" onClick={() => onDelete(movie)}>Delete</button>
      </div>
    </>
  )
}
