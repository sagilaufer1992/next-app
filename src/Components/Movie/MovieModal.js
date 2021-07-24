import './MovieModal.css';
import Title from "../Utility/Title";

import Modal from "@material-ui/core/Modal";
import TextIconButton from '../Utility/TextIconButton';
import MovieRating from './MovieRating';


function MovieModal({ movie, close }) {
    if (!movie) return null;

    const { synopsis, title, largeimage: image, runtime, rating } = movie;
    const [hours, minutes] = _extractTime(runtime);

    return <Modal
        open={true}
        onClose={close}
        className="modal-container"
    >
        <div className="movie-modal-content">
            <div className="movie-left-region">
                <img className="movie-large-image" src={image} alt={title} title={title}></img>
            </div>
            <div className="movie-right-region">
                <div className="movie-details">
                    <Title rows={[title]} />
                    <Title rows={[`${hours}h ${minutes}min`]} className="small" />
                    <MovieRating rating={rating} maxRating={10} />
                    <div className="synopsis">
                        {synopsis}
                    </div>
                </div>
                <TextIconButton
                    icon="keyboard_backspace"
                    text="Back To List"
                    iconOnLeft={true}
                    onClick={close}
                    className="back-button"
                />
            </div>
        </div >
    </Modal>;
}

function _extractTime(runtime) {
    const timeRegex = /(\d*)h(\d*)m/;
    const [_, hours, minutes] = runtime.match(timeRegex);
    return [hours, minutes];
}

export default MovieModal;
