import './MovieListItem.css';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

function MovieListItem({ title, image, rating, year }) {
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
        >
            Read More
        </Button>
    </div>
}

export default MovieListItem;
