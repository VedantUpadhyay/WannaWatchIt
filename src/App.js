import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import MovieList from "./MyComponents/MovieList";
import AddMovie from "./MyComponents/AddMovie";
import React, {useState} from 'react';

function App() {
  const onDelete = (movie) => {
    setMovieList(movieList.filter((e) => {return e !== movie}))
  };

  const addMovie = (title, desc) => {
    if(!title || !desc) return;

    const id = !movieList || movieList.length === 0 ? 1 : movieList[movieList.length - 1].id;
    setMovieList([...movieList, {
      id: id,
      title: title,
      desc: desc
    }]);
  };

  const [movieList, setMovieList] = useState([]);

  return (
    <>
    <Header searchBar={false}/>
    <AddMovie addMovie={addMovie}/>
    <MovieList movieList={movieList} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
