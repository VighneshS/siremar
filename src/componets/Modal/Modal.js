import styles from './modal.module.css';

const Modal = ({handleClose, show, children}) => {
    const showHideClassName = show ? `${styles.modal} ${styles.display_block}` : `$${styles.modal} ${styles.display_none}`;

    return (
        <div className={showHideClassName}>
            <section className={styles.modal_main}>
                {children}
                <button type="button" onClick={handleClose} className={styles.btn + " red"}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;
