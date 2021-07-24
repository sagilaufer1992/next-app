import './MovieList.css';

import MovieListItem from './MovieListItem';

function MovieList({ movies, selectMovie }) {
    return <div className="movie-list">
        {movies === null ? "loading" : movies.map(movie =>
            <MovieListItem key={movie.id} movie={movie} selectMovie={selectMovie} />
        )}
    </div>;
}

export default MovieList;
