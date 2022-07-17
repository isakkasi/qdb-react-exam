import styles from './FormOverlay.module.css';

export const FormOverlay = ({ children, onClose, func }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={() => onClose(func)}></div>

            <div className={styles.modal}>
                <div className={styles['user-container']}>
                    <header className={styles.headers}>
                        <div className={styles.close}>
                            <div className="w3-right">
                                <button className={styles.btn} onClick={() => onClose(func)}>
                                    X
                                </button>
                            </div>

                            {children}
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};
