import './MoviesDisplay.css';
import MovieList from "./MovieList";
import MovieModal from "./MovieModal";

import { useState, useCallback } from "react";

function MoviesDisplay({ movies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const unselectMovie = useCallback(() => setSelectedMovie(null), [setSelectedMovie]);

    return <>
        <MovieList movies={movies} selectMovie={setSelectedMovie} />
        <MovieModal movie={selectedMovie} close={unselectMovie} />
    </>
}

export default MoviesDisplay;
