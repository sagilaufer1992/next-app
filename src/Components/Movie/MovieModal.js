import './MovieModal.css';
import Title from "../Utility/Title";

import Modal from "@material-ui/core/Modal";
import TextIconButton from '../Utility/TextIconButton';


function MovieModal({ movie, close }) {
    if (!movie) return null;

    const { synopsis, title, largeimage: image, runtime } = movie;
    const [hours, minutes] = _extractTime(runtime);

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
                <Title rows={[`${hours}h ${minutes}min`]} className="small" />
                <div className="synopsis">
                    {synopsis}
                </div>
                <TextIconButton
                    icon={"keyboard_backspace"}
                    text={"Back To List"}
                    iconOnLeft={true}
                    onClick={close}
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
