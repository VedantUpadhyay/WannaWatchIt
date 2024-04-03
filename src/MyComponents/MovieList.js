import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'


export default function MovieList(props) {
  let movieListContainer = {
    minHeight: '85vh'
  };

  let textUnderline = {
    textDecoration: 'underline'
  };

  return (
    <div className='container my-3' style={movieListContainer}>
      <h2 style={textUnderline}>Watch List</h2>
      {props.movieList && props.movieList.length > 0 ? props.movieList.map((movie) => {
          return (
            <React.Fragment key={movie.id}>
              <Movie movie={movie} onDelete={props.onDelete} />
              <hr />
            </React.Fragment>
          );
        }): 
          <> 
          <h5>Add MOVIE NOW! <span role="img" description="smiley ecnouragement" aria-label="">😄</span></h5>
          </>
      }
    </div>
  )
  
}


MovieList.propTypes = {
  MovieList: PropTypes.array
}