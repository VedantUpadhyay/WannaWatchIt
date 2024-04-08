import './App.css';
import Header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';
import MovieList from "./MyComponents/MovieList";
import AddMovie from "./MyComponents/AddMovie";
import React, {useState} from 'react';

function App() {
  const onDelete = (movie) => {
    setMovieList(movieList.filter((e) => {return e !== movie}))
  };

  const addMovie = (title) => {
    if(!title) return;

    console.log("movie lst ", movieList);
    const id = movieList.length - 1;
    setMovieList([...movieList, {
      id: id,
      title: title
    }]);
  };

  const [movieList, setMovieList] = useState([]);

  return (
    <>
    <Header searchBar={false}/>
    <MovieList movieList={movieList} onDelete={onDelete}/>
    <AddMovie addMovie={addMovie}/>
    <Footer/>
    </>
  );
}

export default App;
