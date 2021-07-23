import './MovieListItem.css';

function MovieListItem({ title, image }) {
    return <div className="movie-list-item">
        <div className="movie-title">
            {title}
        </div>
        <img src={image} alt={title}></img>
    </div>
}

export default MovieListItem;
