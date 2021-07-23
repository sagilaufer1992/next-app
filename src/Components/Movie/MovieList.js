import { useState, useEffect } from 'react';

import './MovieList.css';

import getMovies from "../../DataProviders/moviesProvider"
import MovieListItem from './MovieListItem';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies().then(moviesResult => {
            setMovies(moviesResult);
            setLoading(false);
        })
    }, []);

    return <div className="movies-list">
        {loading ? "loading" : movies.map(({ id, title, image, rating, released }) =>
            <MovieListItem key={id} title={title} image={image} rating={rating} year={released} />
        )}
    </div>;
}

export default MovieList;
