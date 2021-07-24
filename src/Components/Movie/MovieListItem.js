import './MovieListItem.css';

import { useCallback } from 'react';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

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
        <Button
            variant="outlined"
            color="inherit"
            className="read-more-button"
            endIcon={<Icon>arrow_right_alt</Icon>}
            onClick={_selectMovie}
        >
            Read More
        </Button>
    </div>
}

export default MovieListItem;
