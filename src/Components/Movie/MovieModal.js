import './MovieModal.css';
import Title from "../Utility/Title";

import Modal from "@material-ui/core/Modal";


function MovieModal({ movie, close }) {
    if (!movie) return null;

    const { year, title, largeimage: image } = movie;

    return <Modal
        open={true}
        onClose={close}
        className="modal-container"
    >
        <div className="movie-modal-content">
            <div className="modal-image-region">
                <img className="movie-large-image" src={image} alt={title} title={title}></img>
            </div>
            <div className="modal-movie-details-region">
                <Title rows={[title]} />
            </div>
        </div >
    </Modal>;
}

export default MovieModal;
