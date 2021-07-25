import './MovieListItem.css';

import MovieRating from "./MovieRating";
import TextIconButton from '../Utility/TextIconButton';

import { useCallback } from 'react';

function MovieListItem({ movie, selectMovie }) {
    const { title, image, rating, released: year } = movie;
    const _selectMovie = useCallback(() => selectMovie(movie), [movie, selectMovie]);

    return <div className="movie-list-item">
        <img className={"movie-image"} src={image} title={title} alt={title}></img>
        <div className="movie-title">
            {title} ({year})
        </div>
        <MovieRating rating={rating} />
        <TextIconButton
            text="Read More"
            icon="arrow_right_alt"
            iconOnLeft={false}
            onClick={_selectMovie}
        />
    </div>
}

export default MovieListItem;
