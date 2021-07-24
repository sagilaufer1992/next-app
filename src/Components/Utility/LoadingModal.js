import './LoadingModal.css';

import LinearProgress from '@material-ui/core/LinearProgress';
import { Modal } from '@material-ui/core';
import Title from './Title';

const MOVIES_PER_PAGE = 6;

function LoadingModal({ movies, loading }) {
    return <Modal
        open
        className="loading-modal"
        BackdropProps={{
            className: "loading-backdrop"
        }}
    >
        <div className="progress-container">
            <Title rows={["Loading..."]} />
            <LinearProgress className="linear-progress" />
        </div>
    </Modal>
}

export default LoadingModal;
