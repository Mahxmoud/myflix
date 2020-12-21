import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import moviesData from "./components/moviesData";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const [list, setList] = useState(moviesData)
  const [movies, setMovies] = useState(list)
  const [appNewMovie, setAppNewMovie] = useState('')
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (firstRender === false) {
      setList(
        [...list, appNewMovie]
      )
    }
  }, [appNewMovie])

  useEffect(() => {
    setMovies(
      list
    )
  }, [list])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App}>
          <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
              <MovieListHeading
                heading='Myflix'
                setMovies={setMovies}
                list={list}
              />
            </div>
            <div className='row'>
              <MovieList
                movies={movies}
                setAppNewMovie={setAppNewMovie}
                setFirstRender={setFirstRender}
              />
            </div>
          </div></Route
        ></Switch>
    </BrowserRouter>

  );
}

export default App;
