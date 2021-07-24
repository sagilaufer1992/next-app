import './MovieModal.css';
import Title from "../Utility/Title";

import Modal from "@material-ui/core/Modal";
import TextIconButton from '../Utility/TextIconButton';
import MovieRating from './MovieRating';
import { useCallback } from 'react';

function MovieModal({ movie, close }) {
    const openImdbLink = useCallback(() => {
        window.open("https://www.imdb.com/title/" + _getImdbId(movie), '_blank').focus();
    }, [movie]);

    const downloadMovie = useCallback(() => {
        alert("Downloading is not yet supported");
    });

    if (!movie) return null;

    const { synopsis, title, largeimage: image, runtime, rating, imdbid, download } = movie;
    const [hours, minutes] = _extractTime(runtime);
    const downloadEnabled = download === "1"; // possible values are "1", "0" and "" by the data from the server

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
                    <div className="action-buttons">
                        {imdbid && <div className="imdb-link">
                            <TextIconButton
                                icon="movie_filter"
                                text="View on IMDB"
                                iconOnLeft={true}
                                onClick={openImdbLink}
                                className="imdb-button"
                            />
                        </div>}
                        <TextIconButton
                            icon="system_update_alt"
                            text="Download"
                            iconOnLeft={true}
                            onClick={downloadMovie}
                            disabled={!downloadEnabled}
                        />
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

export default MovieModal;

function _extractTime(runtime) {
    const timeRegex = /(\d*)h(\d*)m/;
    const [_, hours, minutes] = runtime.match(timeRegex);
    return [hours, minutes];
}

function _getImdbId({ imdbid }) {
    return imdbid;
}