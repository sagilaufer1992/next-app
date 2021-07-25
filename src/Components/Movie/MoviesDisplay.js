import './MoviesDisplay.css';

import MovieList from "./MovieList";
import MovieModal from "./MovieModal";

import { useState, useCallback, useEffect } from "react";
import Pagination from '@material-ui/lab/Pagination';
import LoadingModal from '../Utility/LoadingModal';

function MoviesDisplay({ movies, loading, moviesPerPage, downloadMovie }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [page, setPage] = useState(1);
    const [displayedMovies, setDisplayedMovies] = useState([])

    const unselectMovie = useCallback(() => setSelectedMovie(null), [setSelectedMovie]);
    const onPageChange = useCallback((_event, pageNumber) => setPage(pageNumber), [setPage]);

    useEffect(() => {
        setPage(1);
    }, [movies]);

    useEffect(() => {
        if (!movies) return;

        setDisplayedMovies([...movies].splice((page - 1) * moviesPerPage, moviesPerPage))
    }, [page, movies, moviesPerPage]);

    const pages = movies ? Math.ceil(movies.length / moviesPerPage) : 0;

    return <>
        {loading ? <LoadingModal /> :
            <>
                <MovieList movies={displayedMovies} selectMovie={setSelectedMovie} />
                <Pagination
                    count={pages}
                    page={page}
                    onChange={onPageChange}
                    className="pagination"
                />
                <MovieModal movie={selectedMovie} close={unselectMovie} downloadMovie={downloadMovie} />
            </>}
    </>
}

export default MoviesDisplay;
