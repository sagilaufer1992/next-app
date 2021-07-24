import './MovieListItem.css';

import { useCallback } from 'react';
import Icon from "@material-ui/core/Icon";
import TextIconButton from '../Utility/TextIconButton';

function MovieListItem({ movie, selectMovie }) {
    const { title, image, rating, released: year } = movie;
    const _selectMovie = useCallback(() => selectMovie(movie), [movie, selectMovie]);

    return <div className="movie-list-item">
        <img className={"movie-image"} src={image} title={title} alt={title}></img>
        <div className="movie-title">
            {title} ({year})
        </div>
        <div className="rating-container">
            <Icon>star</Icon>
            <div className="rating-score">
                {rating === "" ? "none" : rating}
            </div>
        </div>
        <TextIconButton
            text={"Read More"}
            icon="arrow_right_alt"
            iconOnLeft={false}
            onClick={_selectMovie}
        />
    </div>
}

export default MovieListItem;
