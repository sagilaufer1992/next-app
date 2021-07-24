import "./MovieRating.css";
import Icon from "@material-ui/core/Icon";

function MovieRating({ rating, maxRating }) {
    return <div className="rating-container">
        <Icon>star</Icon>
        <div className="rating-score">
            {rating === "" ? "none" : _calculateRaing(rating, maxRating)}
        </div>
    </div>
}

export default MovieRating

function _calculateRaing(rating, maxRating) {
    if (maxRating) return `${rating}/${maxRating}`;

    return `${rating}`;
}