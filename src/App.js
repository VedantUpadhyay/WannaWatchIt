import './App.css';
import Header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';
import MovieList from "./MyComponents/MovieList";
import AddMovie from "./MyComponents/AddMovie";
import WatchedMovies from './MyComponents/WatchedMovies';
import React, { useState } from 'react';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const onDelete = (movie) => {
    setMovieList(movieList.filter((e) => {return e !== movie}))
  };

  const addMovie = (title) => {
    if(!title) return;

    const id = movieList.length + 1;
    setMovieList([...movieList, {
      id: id,
      title: title
    }]);
  };

  const onListCheck = (movie, isChecked) => {
    if (!isChecked) {
      console.log("in movie checked ", isChecked);
      setWatchedMovies([...watchedMovies, movie]);
      setMovieList(movieList.filter((e) => {return e !== movie}));
    } else {
      setWatchedMovies(watchedMovies.filter((e) => {return e !== movie}));
    }
  };

  const onWatchedCheck = (movie, isChecked) => {
    console.log("is watched checked ", isChecked);
    if (!isChecked) {
      setWatchedMovies([...watchedMovies, movie]);
      setMovieList(movieList.filter((e) => {return e !== movie}));
    } else {
      setWatchedMovies(watchedMovies.filter((e) => {return e !== movie}));
      setMovieList([...movieList, movie]);
    }
  };

  return (
    <>
      <Header searchBar={false}/>
      <div className='app-container'>
        <MovieList movieList={movieList} onDelete={onDelete} onCheck={onListCheck}/>
        <WatchedMovies watchedMovies={watchedMovies} onCheck={onWatchedCheck} />
      </div>
      <div className='add-movie-container'>
        <AddMovie addMovie={addMovie} />
        <Footer/>
      </div>
    </>
  );
}

export default App;
