import styles from './Modal.css';

const Modal = ({handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose} className={styles.btn + " red"}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;
