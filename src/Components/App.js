import './App.css';
import Header from "./Header";
import Title from "./Utility/Title";
import SearchInput from "./Utility/SearchInput";
import MoviesDisplay from './Movie/MoviesDisplay';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import getMovies from "../DataProviders/moviesProvider"

import { useEffect, useState, useCallback } from "react";

function App() {
  const [allMovies, setAllMovies] = useState(null);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  const filterMovies = useCallback(value =>
    allMovies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))
    , [allMovies]);

  useEffect(() => {
    getMovies().then(moviesResult => {
      setAllMovies(moviesResult);
      setMovies(moviesResult);
      setLoading(false);
    })
  }, []);

  return (
    <div className="app">
      <Header />
      <Title rows={["explore your next", "movies and tv shows"]} />
      <SearchInput filterItems={filterMovies} setResult={setMovies} />
      <MoviesDisplay movies={movies} />
    </div>
  );
}

export default App;
