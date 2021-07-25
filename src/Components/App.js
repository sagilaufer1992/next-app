import './App.css';
import Header from "./Header";
import Title from "./Utility/Title";
import SearchInput from "./Utility/SearchInput";
import MoviesDisplay from './Movie/MoviesDisplay';

import getMovies from "../DataProviders/moviesProvider"

import { useEffect, useState, useCallback } from "react";

const TITLE_ROWS = ["explore your next", "movies and tv shows"];
const MOVIES_PER_PAGE = 6;

function App() {
  const [allMovies, setAllMovies] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const downloadMovie = useCallback(movie => alert("Downloading is not yet supported"), []);

  // load movies
  useEffect(() => {
    getMovies().then(moviesResult => {
      setAllMovies(moviesResult);
      setMovies(moviesResult);
      setLoading(false);
    })
  }, []);

  // callback for searching
  useEffect(() => {
    if (!allMovies) return;

    const filteredMovies = allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setMovies(filteredMovies);
  }, [searchTerm, allMovies])

  return (
    <div className="app">
      <Header />
      <Title rows={TITLE_ROWS} />
      <div className="app-content">
        <SearchInput callback={setSearchTerm} />
        <MoviesDisplay movies={movies} loading={loading} moviesPerPage={MOVIES_PER_PAGE} downloadMovie={downloadMovie} />
      </div>
    </div>
  );
}

export default App;
