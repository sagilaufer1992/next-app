import './App.css';
import Header from "./Header";
import Title from "./Utility/Title";
import MoviesDisplay from './Movie/MoviesDisplay';

import getMovies from "../DataProviders/moviesProvider"

import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies().then(moviesResult => {
      setMovies(moviesResult);
      setLoading(false);
    })
  }, []);

  return (
    <div className="app">
      <Header />
      <Title rows={["explore your next", "movies and tv shows"]} />
      <MoviesDisplay movies={movies} />
    </div>
  );
}

export default App;
