import './MoviesDisplay.css';

import MovieList from "./MovieList";
import MovieModal from "./MovieModal";

import { useState, useCallback, useEffect } from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import Pagination from '@material-ui/lab/Pagination';
import { Modal } from '@material-ui/core';

const MOVIES_PER_PAGE = 6;

function MoviesDisplay({ movies, loading }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [page, setPage] = useState(1);
    const [displayedMovies, setDisplayedMovies] = useState([])

    const unselectMovie = useCallback(() => setSelectedMovie(null), [setSelectedMovie]);
    const onPageChange = useCallback((_event, pageNumber) => setPage(pageNumber));


    useEffect(() => {
        setPage(1);
    }, [movies]);

    useEffect(() => {
        if (!movies) return;

        setDisplayedMovies([...movies].splice((page - 1) * MOVIES_PER_PAGE, MOVIES_PER_PAGE))
    }, [page, movies])

    const pages = movies ? Math.ceil(movies.length / MOVIES_PER_PAGE) : 0;

    return <>
        <MovieList movies={displayedMovies} selectMovie={setSelectedMovie} />
        <Pagination
            count={pages}
            page={page}
            onChange={onPageChange}
            className="pagination"
        />
        <MovieModal movie={selectedMovie} close={unselectMovie} />

    </>
}

export default MoviesDisplay;
